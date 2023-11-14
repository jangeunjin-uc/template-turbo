import ProfileAvatar from '@findYourLover/components/ProfileAvatar';
import { CommonLayout } from '@findYourLover/layout';
import { store } from '@findYourLover/store';
import { LoversList } from '@findYourLover/types';
import { Pencil, Trash } from '@phosphor-icons/react';
import { ChangeEvent, useCallback, useState } from 'react';
import { Button, Input } from 'ui';
import { v4 as uuidv4 } from 'uuid';
import shallow from 'zustand/shallow';

export default function InsertInfo() {
  const [lover, setLover] = useState<LoversList>({
    id: uuidv4(),
    name: '',
    photoUrl: null,
    adjective: '',
    photoFile: null,
  });
  const [loverList, setLoverList] = useState<LoversList[]>([]);
  const [toastShow] = store(({ toast }) => [toast.toastShow], shallow);

  const handleChangeLover = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;

      if (name !== 'file') {
        return setLover((prev) => ({
          ...prev,
          [name]: value,
        }));
      }

      const files = Array.from(e.currentTarget.files || []);

      files.forEach((file) => {
        const photourl = URL.createObjectURL(file);

        return setLover((prev) => ({ ...prev, photoUrl: photourl, photoFile: file }));
      });
    },
    [lover],
  );

  const emptyLover = () =>
    setLover({ id: uuidv4(), name: '', adjective: '', photoUrl: null, photoFile: null });

  const handleSaveList = () => {
    if (loverList && loverList.length > 2) {
      return toastShow({ id: uuidv4(), title: '15개 미만으로 등록 가능합니다.' });
    }

    const existIdx = loverList.findIndex((item) => lover.id === item.id);

    emptyLover();

    if (existIdx >= 0) {
      const lovers = loverList.filter((_, idx) => idx === existIdx);

      return setLoverList(() => [...lovers, lover]);
    }

    return setLoverList((prev) => [...prev, lover]);
  };

  const handleDeleteRow = (id: string) => {
    const newList = loverList.filter((luv) => luv.id !== id);

    setLoverList(newList);
  };

  return (
    <CommonLayout className="insert">
      <div className="insert-container">
        <h1 className="title">당신의 이상형을 넣어주세요.</h1>
        <div className="insert-area">
          <div className="insert-card">
            <div className="input-area">
              <Input
                id={lover.id}
                name="adjective"
                variant="withLabel"
                inputColor="primary"
                inputMode="text"
                inputStyleType="contained"
                label="이상형 꾸밈말"
                placeholder="당신의 이상형은 어떤 사람인가요?(예: 잘생긴, 능력있는)"
                maxLength={10}
                value={lover.adjective}
                onChange={handleChangeLover}
              />
              <Input
                id={lover.id}
                name="name"
                variant="withLabel"
                inputColor="primary"
                inputMode="text"
                inputStyleType="contained"
                placeholder="당신의 이상형 이름은?"
                label="이상형 이름"
                maxLength={10}
                value={lover.name}
                onChange={handleChangeLover}
              />
              <Input
                type="file"
                name="file"
                id={lover.id}
                variant="withLabel"
                inputStyleType="underline"
                inputColor="primary"
                label="이상형 사진"
                onChange={handleChangeLover}
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="insert-actions">
              <Button
                variant="textOnly"
                buttonStyleType="contained"
                label="저장하기"
                buttonColor="primary"
                onClick={handleSaveList}
              />
            </div>
          </div>
        </div>
        <div className="card-list-area">
          <ul className="card-list">
            {loverList.map((luv) => (
              <li className="card-item" key={luv.id}>
                <ProfileAvatar {...luv} />
                <div className="card-actions">
                  <Button className="btn-modify" variant="iconOnly" icon={<Pencil />} id={luv.id} />
                  <Button
                    className="btn-delete"
                    variant="iconOnly"
                    icon={<Trash />}
                    id={luv.id}
                    onClick={() => handleDeleteRow(luv.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CommonLayout>
  );
}

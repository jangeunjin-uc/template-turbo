import { CommonLayout } from '@findYourLover/layout';
import { LoversList } from '@findYourLover/types';
import { Plus, Trash } from '@phosphor-icons/react';
import { ChangeEvent, useCallback, useState } from 'react';
import { Button, Input } from 'ui';
import { v4 as uuidv4 } from 'uuid';

export default function InsertInfo() {
  const [lover, setLover] = useState<LoversList>({
    id: uuidv4(),
    name: '',
    photoUrl: '',
    adjective: '',
  });
  const [loverList, setLoverList] = useState<LoversList[]>([]);

  const handleChangeLover = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;

      setLover((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [lover],
  );

  return (
    <CommonLayout className="insert-page">
      <div className="insert-container">
        <h1 className="title">당신의 이상형을 넣어주세요.</h1>
        <div className="insert-area">
          <div className="insert-list">
            <li className="insert-item">
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
                  maxLength={10}
                />
              </div>
              <div className="insert-actions">
                <Button
                  variant="textOnly"
                  buttonStyleType="contained"
                  label="저장하기"
                  buttonColor="primary"
                />
              </div>
            </li>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}

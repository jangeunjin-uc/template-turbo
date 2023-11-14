interface ProfileAvatarProps {
  photoUrl?: string | null;
  adjective?: string;
  name: string;
}

export default function ProfileAvatar({
  photoUrl = null,
  adjective = '',
  name,
}: ProfileAvatarProps) {
  return (
    <div className="profile-avatar">
      <div className="profile-img-wrapper">
        <img
          src={photoUrl || '@findYourLover/assets/images/sample/avatar_default.png'}
          alt={name}
        />
      </div>
      <div className="profile-info">
        <strong>{adjective}</strong>
        <span>&nbsp;{name}</span>
      </div>
    </div>
  );
}

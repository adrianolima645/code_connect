import Image from "next/image"
import styles from './avatar.module.css';

interface AvatarProps {
  name: string;
  imageSrc: string;
}

export const Avatar:React.FC<AvatarProps> = ({ name, imageSrc}) => {
  return (
    <ul className={ styles.avatar }>
      <li>
        <Image src={imageSrc} alt={ `Imagem do(a) ${name}`} width={32} height={32} />
      </li>
      <li>
        @{ name }
      </li>
    </ul>
  );
}

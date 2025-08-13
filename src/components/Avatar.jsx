import styles from './Avatar.module.css'

export function Avatar({hadBorder = true, src}) {

    return (
        <img
            className={hadBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    );
}
import styles from './loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div></div>
            </div>
            <p className={styles.textLoader}>Loading...</p>
        </div>
    )
}

export default Loading
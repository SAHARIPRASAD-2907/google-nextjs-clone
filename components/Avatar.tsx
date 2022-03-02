function Avatar(props: { url: any, className: string }) {
    const { url, className } = props
    const css = `h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${props.className}`
    return (
        <img className={css} loading="lazy" src={url} alt="profile pic" />
    )
}

export default Avatar
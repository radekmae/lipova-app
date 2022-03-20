export default function scrollTo(id, offsetY = 60, callback = () => null) {
    document
        .getElementById(id)
        .scrollIntoView({ top: offsetY, behavior: "smooth" });

    const top =
        document.getElementById(id).getBoundingClientRect().top +
        window.pageYOffset -
        offsetY;

    window.scrollTo({ top, behavior: "smooth" });
    return callback();
}

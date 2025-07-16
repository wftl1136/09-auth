import css from "./Footer.module.css";

const Footer = () => (
  <footer className={css.footer} role="contentinfo">
    <div className={css.content}>
      <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
      <div className={css.wrap}>
        <p>Developer: Maksym Zhelezniak</p>
        <p>
          Contact us:{" "}
          <a
            href="mailto:zzzeleznyakmaxim@gmail.com"
            aria-label="Send email to student@notehub.app"
          >
            zzzeleznyakmaxim@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

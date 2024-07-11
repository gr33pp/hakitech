export default function Footer({ scrollToTop }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pussy. All rights reserved.</p>
      {scrollToTop && (
        <span
          class="material-symbols-outlined"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          arrow_upward
        </span>
      )}
    </footer>
  );
}

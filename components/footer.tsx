export function Footer({ className }: { className?: string }) {
  return (
    <footer className={`mt-auto border-t border-fd-border py-4 px-6 text-center text-sm text-muted-foreground ${className ?? ''}`}>
      &copy; 2026 PySplanner. PySplanner is licensed under the &nbsp;
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" className="text-fd-foreground hover:underline hover:text-white transition-colors duration-100 ease-in-out">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </a>
      . The PySplanner name and logo are trademarks of PySplanner.
    </footer>
  );
}
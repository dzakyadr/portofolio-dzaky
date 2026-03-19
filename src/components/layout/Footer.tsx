export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-foreground/10 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Dzaky Adrian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

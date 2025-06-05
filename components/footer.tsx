export default function Footer() {
  return (
    <footer className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center">
        <p className="text-orange-400 dark:text-white">
          © 2025{" "}
          <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent font-bold">
            Win
          </span>
          <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent font-bold">
            Apps
          </span>
        </p>
        <p className="text-orange-400 dark:text-white">All Rights Reserved</p>
        <p className="text-orange-400 dark:text-white">mitchellwintrow@gmail.com</p>
      </div>
    </footer>
  );
}
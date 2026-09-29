import Image from "next/image";
import Link from "next/link";

export default function EnTete() {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-icone.png"
          alt=""
          width={36}
          height={36}
          className="rounded-icone"
          priority
        />
        <span className="font-titre text-2xl font-bold">findspeed</span>
      </Link>
      <Link
        href="/connexion"
        className="rounded-carte bg-jaune px-3 py-2 text-sm font-bold transition-transform active:scale-95"
      >
        Espace vendeur
      </Link>
    </nav>
  );
}

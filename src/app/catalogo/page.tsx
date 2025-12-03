import CatalogoGrid from "./CatalogoGrid";

export const metadata = {
  title: "Catálogo | BoliDiviértete",
  description: "Alquiler de boliranas, juegos de rana, mini tejos y más.",
};

export default function CatalogoPage() {
  return (
    <main>
      <CatalogoGrid />
    </main>
  );
}

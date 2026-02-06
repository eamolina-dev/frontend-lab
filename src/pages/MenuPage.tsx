import { MenuItemCard } from "../components/menu-page/MenuItemCard";
import { MenuSection } from "../components/menu-page/MenuSection";

export const MenuPage = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-light">Restó Merlo</h1>
        <p className="text-neutral-500 mt-2">Menú digital</p>
      </header>

      <MenuSection title="Pizzas">
        <MenuItemCard
          name="Muzzarella"
          description="Salsa de tomate, muzzarella y aceitunas"
          price="$4.500"
        />
        <MenuItemCard
          name="Especial"
          description="Muzzarella, jamón, morrones y huevo"
          price="$5.200"
        />
      </MenuSection>

      <MenuSection title="Bebidas">
        <MenuItemCard name="Agua mineral" price="$1.200" />
        <MenuItemCard name="Cerveza artesanal" price="$2.500" />
      </MenuSection>

      <footer className="text-center text-sm text-neutral-400 py-10">
        Menú digital desarrollado por Agustín Molina · Contacto:
        tuemail@mail.com
      </footer>
    </div>
  );
};

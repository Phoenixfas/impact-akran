import Link from "next/link"
import style from "../styles/layout.module.css"

export default function NavBarMenu() {
  return (
    <div className={style.products__navMenu}>
        <div className={style.navMenu__row}>
            <h2>All</h2>
            <Link href={"/products"}><p>Products</p></Link>
        </div>
        <div className={style.navMenu__row}>
            <h2>Export</h2>
            <Link href={"/products/cereals"}><p>Cereals</p></Link>
            <Link href={"/products/coffee"}><p>Coffee</p></Link>
            <Link href={"/products/oil-seeds"}><p>Oil Seeds</p></Link>
            <Link href={"/products/pulses"}><p>Pulses</p></Link>
            <Link href={"/products/spices"}><p>Spices</p></Link>
        </div>
        <div className={style.navMenu__row}>
            <h2>Import</h2>
            <Link href={"/products/construction-machinery"}><p>Construction Machinery</p></Link>
            <Link href={"/products/construction-materials"}><p>Construction Materials</p></Link>
            <Link href={"/products/food-items"}><p>Food Items</p></Link>
            <Link href={"/products/industrial-chemicals"}><p>Industrial Chemicals</p></Link>
            <Link href={"/products/spare-parts"}><p>Spare Parts</p></Link>
            <Link href={"/products/stationery"}><p>Stationery</p></Link>
            <Link href={"/products/wood"}><p>Wood</p></Link>
        </div>
        
    </div>
  )
}

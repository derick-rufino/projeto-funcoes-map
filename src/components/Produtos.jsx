import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export default function Produtos(){

  const produtos = [
    {
      id: 1,
      nome: "Notebook Apple MacBook Air 13 (M4)",
      preco: 1199.99,
      img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      nome: "Notebook ASUS Zenbook 14 OLED",
      preco: 999.99,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      nome: "SSD NVMe 1TB PCIe 4.0",
      preco: 89.9,
      img: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      nome: "Monitor 27\" QHD 165Hz",
      preco: 329.5,
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      nome: "Teclado Mecânico RGB",
      preco: 129.99,
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      nome: "Mouse Gamer Sem Fio",
      preco: 79.9,
      img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    },
  ]
    
    return (
      <Carousel opts={{loop: true}} className="max-w-120 max-h-60">
        <CarouselContent>
          {produtos.map((produto) => (
            <CarouselItem key={produto.id} className="bg-slate-100 aspect-9/16">
              <img src={produto.img} alt={produto.nome} className="aspect-square rounded-sm"/>
              <h3>{produto.nome}</h3>
              <p>${produto.preco.toFixed(2)}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
}
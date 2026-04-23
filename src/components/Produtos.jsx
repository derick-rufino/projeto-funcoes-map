import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconShoppingBag, IconStarFilled } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Notebook Apple MacBook Air 13 (M4)",
      preco: 1199.99,
      avaliacao: 4.9,
      categoria: "Notebook",
      parcelas: "12x de $99.99",
      img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?cs=srgb&dl=pexels-tuurt-812264.jpg&fm=jpg",
    },
    {
      id: 2,
      nome: "Notebook ASUS Zenbook 14 OLED",
      preco: 999.99,
      avaliacao: 4.8,
      categoria: "Notebook",
      parcelas: "12x de $83.33",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      nome: "SSD NVMe 1TB PCIe 4.0",
      preco: 89.9,
      avaliacao: 4.7,
      categoria: "Armazenamento",
      parcelas: "6x de $14.98",
      img: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      nome: 'Monitor 27" QHD 165Hz',
      preco: 329.5,
      avaliacao: 4.8,
      categoria: "Monitor",
      parcelas: "10x de $32.95",
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      nome: "Teclado Mecânico RGB",
      preco: 129.99,
      avaliacao: 4.6,
      categoria: "Periférico",
      parcelas: "8x de $16.24",
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      nome: "Mouse Gamer Sem Fio",
      preco: 79.9,
      avaliacao: 4.7,
      categoria: "Periférico",
      parcelas: "6x de $13.32",
      img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <Card className="rounded-3xl border-border/70 bg-card/80 py-0 backdrop-blur">
      <CardHeader className="px-6 pt-6 pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <IconShoppingBag className="size-5 text-primary" />
          Seleção de produtos
        </CardTitle>
        <CardDescription>
          Novo layout com foco em leitura rápida e comparação.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-8 pb-7">
        <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-2xl">
          <CarouselContent>
            {produtos.map((produto) => (
              <CarouselItem key={produto.id}>
                <article className="grid overflow-hidden rounded-3xl border bg-background/90 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <img
                      src={produto.img}
                      alt={produto.nome}
                      className="h-52 w-full object-cover md:h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-4 p-5 md:col-span-7 md:p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="rounded-full px-3">
                          {produto.categoria}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="gap-1 rounded-full px-3"
                        >
                          <IconStarFilled className="size-3 text-amber-400" />
                          {produto.avaliacao}
                        </Badge>
                      </div>

                      <h3 className="line-clamp-2 text-base font-medium leading-tight">
                        {produto.nome}
                      </h3>
                    </div>

                    <div className="space-y-1">
                      <p className="font-heading text-3xl font-semibold tracking-tight text-primary">
                        ${produto.preco.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {produto.parcelas} sem juros
                      </p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-background" />
          <CarouselNext className="right-2 bg-background" />
        </Carousel>
      </CardContent>
    </Card>
  );
}

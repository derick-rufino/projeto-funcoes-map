import { IconMovie, IconStarFilled } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Filmes() {
  const filmes = [
    { id: 1, nome: "Interestelar", ano: 2014, nota: 8.7, genero: "Ficção" },
    { id: 2, nome: "Parasita", ano: 2019, nota: 8.5, genero: "Suspense" },
    { id: 3, nome: "Cidade de Deus", ano: 2002, nota: 8.6, genero: "Drama" },
  ];

  return (
    <Card className="h-full rounded-3xl border-border/70 bg-card/80 py-0 backdrop-blur">
      <CardHeader className="px-6 pt-6 pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <IconMovie className="size-5 text-primary" />
          Filmes em destaque
        </CardTitle>
        <CardDescription>
          Lista renderizada com map() e estilo em cards.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 px-4 pb-5">
        {filmes.map((filme) => (
          <article
            key={filme.id}
            className="flex items-center justify-between rounded-2xl px-3 py-3 transition hover:bg-muted/40"
          >
            <div>
              <h3 className="font-medium">{filme.nome}</h3>
              <p className="text-sm text-muted-foreground">{filme.ano}</p>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary">{filme.genero}</Badge>
              <Badge variant="outline" className="gap-1">
                <IconStarFilled className="size-3 text-amber-400" />
                {filme.nota}
              </Badge>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

type Valencia = {
slug: string
title: string
description: string
ementa: string
horarios: string
}


const valencias: Valencia[] = [
{
slug: "creche",
title: "Creche & Berçário",
description: "Espaço dedicado ao cuidado e desenvolvimento das crianças até 3 anos.",
ementa: "/docs/ementa-creche.pdf",
horarios: "08h00 - 19h00",
},
{
slug: "jardim",
title: "Jardim de Infância",
description: "Atividades pedagógicas e lúdicas para crianças dos 3 aos 6 anos.",
ementa: "/docs/ementa-jardim.pdf",
horarios: "08h30 - 18h30",
},
{
slug: "primeirociclo",
title: "1.º Ciclo",
description: "Ensino básico com projetos educativos alinhados ao currículo nacional.",
ementa: "/docs/ementa-1ciclo.pdf",
horarios: "09h00 - 17h30",
},
]


export async function getValencias() {
return valencias
}


export async function getValenciaBySlug(slug: string) {
return valencias.find((v) => v.slug === slug)
}
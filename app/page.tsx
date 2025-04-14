"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/components/ui/use-toast"

export default function HouseholdChecklist() {
  // Define categories and items
  const categories = {
    kitchen: {
      title: "COZINHA",
      items: [
        "Afiador de Facas",
        "Abridor de Latas",
        "Açucareiro",
        "Amassador de Batata",
        "Jogo de Xícaras",
        "Jogo de Sobremesa",
        "Jogo de Copo P",
        "Jogo de Copo M",
        "Jogo de Copo G",
        "Jogo de Taças",
        "Jogo de Talheres",
        "Jarra de Suco",
        "Saleiro",
        "Porta Temperos",
        "Tábua de Carne",
        "Frigideira",
        "Frigideira Pequena",
        "Descascador de Legumes",
        "Ralador",
        "Escorredor de Louça",
        "Lixeira de Cozinha",
        "Fruteira",
        "Descanso de Louças",
        "Suporte Papel Toalha",
        "Porta Copos",
        "Tapete de Cozinha",
        "Espátula",
        "Concha",
        "Copo Medidor",
        "Espremedor",
        "Escorredor Macarrão",
        "Jogo de Peneiras",
        "Leiteira",
        "Paliteiro",
        "Pano de Prato",
        "Pincel",
        "Tesoura",
        "Rodo de Pia",
        "Secador de Salada",
        "Suporte de Bolo",
        "Bacias de Plástico",
        "Colheres de Medida",
        "Triturador Pequeno",
        "Funil",
        "Panela Cuscuzeira",
        "Jogo Panela Tramontina",
        "Porta Alho",
        "Organizador de Talher",
        "Faqueiro Tramontina",
        "Colheres de Silicone",
        "Colheres de Pau",
        "Saladeira",
        "Travessas",
        "Forma de Bolo",
        "Forma Retangular",
        "Potes de Vidro",
        "Potes de Plástico",
        "Bandeijas",
        "Forma de Silicone",
        "Garrafa Térmica",
      ],
    },
    appliances: {
      title: "ELETRODOMÉSTICOS",
      items: [
        "Air Fryer",
        "Liquidificador",
        "Microondas",
        "Batedeira",
        "Sanduicheira",
        "Processador Alimentos",
        "Purificador de Água",
        "Forno",
        "Geladeira",
      ],
    },
    bedroom: {
      title: "QUARTO",
      items: [
        "Cabeceira",
        "Cabides",
        "Cobertor Casal",
        "Cobertor Solteiro",
        "Mantinha Casal",
        "Mantinha Solteiro",
        "Caixa Organizadora",
        "Jogo de Colchão",
        "Fronha básica",
        "Colchão",
        "Cama",
        "Cortina",
        "Decoração",
        "Lençol",
        "Manta",
        "Mesinha de Cabeceira",
        "Protetor de Colchão",
        "Travesseiro",
        "Tapete",
        "Guarda-roupa",
        "Espelho",
        "Almofadas",
        "Ventilador",
        "Ar Condicionado",
        "Penteadeira",
        "Televisão",
      ],
    },
    bathroom: {
      title: "BANHEIRO",
      items: [
        "Cesto de Roupa Suja",
        "Decoração",
        "Escova de Sanitário",
        "Frasco Sabon. Líquid.",
        "Lixeira",
        "Porta Cotonete",
        "Porta Escova de Dente",
        "Porta Toalha",
        "Saboneteira",
        "Tapetes",
        "Toalha de Banho",
        "Toalha de Rosto",
      ],
    },
    livingRoom: {
      title: "SALA DE ESTAR",
      items: [
        "Almofadas",
        "Capas de Almofadas",
        "Painel de TV",
        "Porta Chaves",
        "Porta Retratos",
        "Sofá",
        "Tapete",
        "Televisão",
        "Mesa e Cadeira",
        "Cortinas",
        "Decoração",
      ],
    },
    laundry: {
      title: "ÁREA DE SERVIÇO",
      items: [
        "Balde",
        "Borrifador",
        "Dispenser de Sabão",
        "Escovão",
        "Ferro de Passar",
        "Flanelas",
        "Pá de Lixo",
        "Pano de Chão",
        "Potes Organizadores",
        "Prendedor de Roupa",
        "Rodo",
        "Suporte de Vassoura",
        "Vassoura",
        "Máquina de Lavar",
        "Extensão",
        "Adaptador de Tomada",
        "Lixeira",
        "Bacia",
        "Porta Amaciante",
        "Pá",
        "Desentupidor",
        "Aromatizante de Amb.",
      ],
    },
  }

  // Initialize state for checked items
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("kitchen")
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Load saved state from localStorage
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem("householdChecklist")
      if (savedItems) {
        const parsedItems = JSON.parse(savedItems)
        setCheckedItems(parsedItems)
        console.log("Dados carregados:", parsedItems)
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    // Only save if component has loaded (to avoid overwriting with empty state)
    if (isLoaded && Object.keys(checkedItems).length > 0) {
      try {
        console.log("Salvando dados:", checkedItems)
        localStorage.setItem("householdChecklist", JSON.stringify(checkedItems))

        // Show toast notification
        toast({
          title: "Dados salvos",
          description: "Suas alterações foram salvas automaticamente",
          duration: 2000,
        })
      } catch (error) {
        console.error("Erro ao salvar dados:", error)
        toast({
          title: "Erro ao salvar",
          description: "Não foi possível salvar suas alterações",
          variant: "destructive",
          duration: 3000,
        })
      }
    }
  }, [checkedItems, isLoaded])

  // Toggle checkbox state with direct approach
  const toggleItem = (item: string) => {
    console.log("Clicou no item:", item)
    const newValue = !checkedItems[item]
    console.log("Novo valor:", newValue)

    // Update state with a new object to ensure React detects the change
    const newCheckedItems = { ...checkedItems, [item]: newValue }
    setCheckedItems(newCheckedItems)
  }

  // Clear all saved data
  const clearSavedData = () => {
    if (window.confirm("Tem certeza que deseja limpar todos os dados salvos?")) {
      localStorage.removeItem("householdChecklist")
      setCheckedItems({})
      toast({
        title: "Dados limpos",
        description: "Todos os dados foram removidos",
        duration: 3000,
      })
    }
  }

  // Calculate progress for a category
  const calculateProgress = (categoryItems: string[]) => {
    const total = categoryItems.length
    const completed = categoryItems.filter((item) => checkedItems[item]).length
    return {
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      completed,
      total,
    }
  }

  return (
    <div className="container mx-auto py-4 px-2 sm:py-8 sm:px-4 max-w-5xl">
      <Toaster />
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Lista de Enxoval Filipi e Ana</h1>

      {/* Summary Cards - Fixed height and better responsive behavior */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          {Object.entries(categories).map(([key, category]) => {
            const progress = calculateProgress(category.items)
            return (
              <Card
                key={key}
                className="shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setActiveTab(key)}
              >
                <CardHeader className="pb-2 pt-3 px-4">
                  <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>
                      {progress.completed} de {progress.total} itens
                    </span>
                    <span className="font-medium text-sm bg-muted px-2 py-0.5 rounded-full">
                      {progress.percentage}%
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <Progress value={progress.percentage} className="h-2 mb-4" />

                  {/* Chart with fixed dimensions */}
                  <div className="flex justify-center items-center h-[120px] w-full">
                    {progress.total > 0 ? (
                      <div className="w-[120px] h-[120px] relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">{progress.percentage}%</span>
                        </div>
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {/* Background circle */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#e4e4e7" strokeWidth="12" />
                          {/* Progress circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#4ade80"
                            strokeWidth="12"
                            strokeDasharray={`${(2 * Math.PI * 40 * progress.percentage) / 100} ${
                              (2 * Math.PI * 40 * (100 - progress.percentage)) / 100
                            }`}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground">Nenhum item</div>
                    )}
                  </div>

                  {/* Legend */}
                  <div className="flex justify-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                      <span>Comprados</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#e4e4e7]"></div>
                      <span>Pendentes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Category Tabs - Scrollable on mobile */}
      <Tabs defaultValue="kitchen" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 mb-4 min-w-max sm:min-w-0">
            {Object.entries(categories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="text-xs sm:text-sm py-2 px-3 sm:px-4 whitespace-nowrap">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(categories).map(([key, category]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <Card>
              <CardHeader className="py-3 px-3 sm:px-6">
                <CardTitle className="flex justify-between items-center text-lg sm:text-xl">
                  {category.title}
                  <span className="text-xs sm:text-sm font-normal bg-muted px-2 py-1 rounded-full">
                    {calculateProgress(category.items).completed}/{category.items.length} itens
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center space-x-3 py-2 border-b border-muted/40">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto hover:bg-transparent"
                        onClick={() => toggleItem(item)}
                      >
                        <Checkbox checked={!!checkedItems[item]} className="h-5 w-5 pointer-events-none" />
                      </Button>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto hover:bg-transparent justify-start"
                        onClick={() => toggleItem(item)}
                      >
                        <span
                          className={`text-sm font-medium leading-none ${
                            checkedItems[item] ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {item}
                        </span>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Fixed bottom navigation for mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2 z-10">
        <div className="flex justify-between items-center">
          {Object.entries(categories)
            .slice(0, 3)
            .map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex flex-col items-center p-1 ${
                  activeTab === key ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-[10px]">{category.title.split(" ")[0]}</span>
              </button>
            ))}
          <button
            onClick={() => {
              const keys = Object.keys(categories)
              const currentIndex = keys.indexOf(activeTab)
              const nextIndex = (currentIndex + 1) % keys.length
              setActiveTab(keys[nextIndex])
            }}
            className="flex flex-col items-center p-1 text-primary"
          >
            <span className="text-[10px]">MAIS</span>
          </button>
        </div>
      </div>

      {/* Reset button */}
      <div className="flex justify-center mt-8 mb-4">
        <Button variant="destructive" size="sm" onClick={clearSavedData}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-2 mr-2"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
          Limpar todos os dados
        </Button>
      </div>

      {/* Add padding at the bottom for mobile to account for fixed navigation */}
      <div className="h-16 sm:h-0"></div>
    </div>
  )
}

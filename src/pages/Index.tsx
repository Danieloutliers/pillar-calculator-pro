
import { Building2, Calculator, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculadora Estrutural de Pilares
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramenta profissional para cálculos estruturais conforme as normas ABNT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp">
          <Link to="/calculo">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
              <Calculator className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Novo Cálculo
              </h2>
              <p className="text-gray-600">
                Iniciar um novo cálculo estrutural de pilar
              </p>
            </Card>
          </Link>

          <Link to="/projetos">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
              <Building2 className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Projetos
              </h2>
              <p className="text-gray-600">
                Visualizar e gerenciar projetos salvos
              </p>
            </Card>
          </Link>

          <Link to="/configuracoes">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
              <Settings className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Configurações
              </h2>
              <p className="text-gray-600">
                Ajustar parâmetros e normas ABNT
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

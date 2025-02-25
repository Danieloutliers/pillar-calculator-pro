
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Resultados = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  // Constantes conforme NBR 6118:2014
  const FATOR_SEGURANCA_CONCRETO = 1.4; // γc = 1,4 para combinações normais
  const FATOR_SEGURANCA_ACO = 1.15; // γs = 1,15 para combinações normais

  // Simulação de cálculos (substitua com suas fórmulas reais)
  const calculaResistencia = () => {
    const fck = parseFloat(formData.fck);
    const area = parseFloat(formData.largura) * parseFloat(formData.altura);
    const fcd = fck / FATOR_SEGURANCA_CONCRETO; // Resistência de cálculo do concreto
    return (fcd * area * 0.85) / 10; // Valor em kN
  };

  const calculaAreaAco = () => {
    const diametro = parseFloat(formData.diametroAco);
    const qtdBarras = parseFloat(formData.qtdBarras);
    const areaUnitaria = Math.PI * Math.pow(diametro/2, 2);
    return (areaUnitaria * qtdBarras).toFixed(2);
  };

  const resistencia = calculaResistencia();
  const resistenciaToneladas = (resistencia / 10).toFixed(2); // Convertendo kN para toneladas
  
  const dadosGrafico = [
    {
      nome: "Resistência Característica",
      valor: resistencia * FATOR_SEGURANCA_CONCRETO,
    },
    {
      nome: "Resistência de Projeto",
      valor: resistencia,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <Card className="p-6 bg-white animate-fadeIn">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Resultados do Cálculo
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Dados do Pilar</h2>
              <div className="space-y-2 text-gray-600">
                <p>Dimensões: {formData.largura}x{formData.altura} cm</p>
                <p>Comprimento: {formData.comprimento} m</p>
                <p>FCK: {formData.fck} MPa</p>
                <p>Tipo de Aço: {formData.tipoAco}</p>
                <p>Diâmetro do Aço: {formData.diametroAco} mm</p>
                <p>Quantidade de Barras: {formData.qtdBarras}</p>
                <p>Área Total de Aço: {calculaAreaAco()} mm²</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Resistência Calculada</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {resistenciaToneladas} ton
                  </div>
                  <p className="text-sm text-gray-500">
                    ({resistencia.toFixed(2)} kN)
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Conforme NBR 6118:2014
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Fator de Segurança do Concreto (γc): {FATOR_SEGURANCA_CONCRETO}</p>
                    <p>Fator de Segurança do Aço (γs): {FATOR_SEGURANCA_ACO}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosGrafico}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => navigate("/calculo")}>
              Novo Cálculo
            </Button>
            <Button onClick={() => window.print()}>
              Exportar PDF
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resultados;

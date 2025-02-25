
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const Calculo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    largura: "",
    altura: "",
    comprimento: "",
    fck: "",
    tipoAco: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/resultados", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <Card className="p-6 bg-white animate-fadeIn">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Dados do Pilar
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="largura">Largura (cm)</Label>
                <Input
                  id="largura"
                  type="number"
                  placeholder="20"
                  value={formData.largura}
                  onChange={(e) =>
                    setFormData({ ...formData, largura: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="altura">Altura (cm)</Label>
                <Input
                  id="altura"
                  type="number"
                  placeholder="40"
                  value={formData.altura}
                  onChange={(e) =>
                    setFormData({ ...formData, altura: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comprimento">Comprimento (m)</Label>
                <Input
                  id="comprimento"
                  type="number"
                  placeholder="3"
                  value={formData.comprimento}
                  onChange={(e) =>
                    setFormData({ ...formData, comprimento: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fck">FCK (MPa)</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, fck: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o FCK" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20 MPa</SelectItem>
                    <SelectItem value="25">25 MPa</SelectItem>
                    <SelectItem value="30">30 MPa</SelectItem>
                    <SelectItem value="35">35 MPa</SelectItem>
                    <SelectItem value="40">40 MPa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="tipoAco">Tipo de Aço</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, tipoAco: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de aço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CA25">CA-25</SelectItem>
                    <SelectItem value="CA50">CA-50</SelectItem>
                    <SelectItem value="CA60">CA-60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button variant="outline" onClick={() => navigate("/")}>
                Cancelar
              </Button>
              <Button type="submit">Calcular</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Calculo;

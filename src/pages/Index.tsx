import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('main');

  const locations = [
    { id: 'ninjago-city', name: 'Ниндзяго Сити', x: 35, y: 40, description: 'Главный город Ниндзяго' },
    { id: 'monastery', name: 'Монастырь', x: 60, y: 25, description: 'Место тренировок ниндзя' },
    { id: 'underworld', name: 'Подземелье', x: 20, y: 80, description: 'Царство скелетов' },
    { id: 'fire-temple', name: 'Храм Огня', x: 80, y: 60, description: 'Священное место элементалов огня' },
    { id: 'ice-fortress', name: 'Ледяная Крепость', x: 10, y: 20, description: 'Замороженная цитадель' },
  ];

  const characters = [
    { name: 'Ллойд', element: 'Зеленый ниндзя', weapon: 'Катаны', color: 'neon-green' },
    { name: 'Кай', element: 'Огонь', weapon: 'Меч огня', color: 'neon-orange' },
    { name: 'Джей', element: 'Молния', weapon: 'Нунчаки', color: 'neon-cyan' },
    { name: 'Коул', element: 'Земля', weapon: 'Коса', color: 'neon-yellow' },
    { name: 'Зейн', element: 'Лед', weapon: 'Сюрикены', color: 'neon-cyan' },
    { name: 'Ния', element: 'Вода', weapon: 'Копье', color: 'neon-cyan' },
  ];

  const seasons = [
    { number: 1, title: 'Восстание Змей', year: 2012, episodes: 13 },
    { number: 2, title: 'Наследие Зеленого Ниндзя', year: 2012, episodes: 13 },
    { number: 3, title: 'Перезагрузка', year: 2014, episodes: 8 },
    { number: 4, title: 'Турнир Элементов', year: 2015, episodes: 10 },
    { number: 5, title: 'Одержимость', year: 2015, episodes: 10 },
  ];

  const villains = [
    { name: 'Гармадон', description: 'Тёмный властелин', threat: 'Высокая' },
    { name: 'Змеиные генералы', description: 'Древние враги', threat: 'Средняя' },
    { name: 'Оверлорд', description: 'Воплощение зла', threat: 'Критическая' },
    { name: 'Мастер Чен', description: 'Хитрый манипулятор', threat: 'Высокая' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'characters':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, index) => (
              <Card key={index} className={`bg-dark-card border-2 border-${char.color} p-6 animate-pulse-neon hover:scale-105 transition-transform`}>
                <div className={`text-${char.color} text-xl font-bold mb-2`}>{char.name}</div>
                <div className="text-gray-300 mb-2">Элемент: {char.element}</div>
                <div className="text-gray-300">Оружие: {char.weapon}</div>
              </Card>
            ))}
          </div>
        );
      case 'seasons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season) => (
              <Card key={season.number} className="bg-dark-card border-2 border-neon-magenta p-6 hover:border-neon-cyan transition-colors">
                <div className="text-neon-magenta text-xl font-bold mb-2">Сезон {season.number}</div>
                <div className="text-neon-cyan text-lg mb-2">{season.title}</div>
                <div className="text-gray-300">{season.year} • {season.episodes} эпизодов</div>
              </Card>
            ))}
          </div>
        );
      case 'villains':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {villains.map((villain, index) => (
              <Card key={index} className="bg-dark-card border-2 border-red-500 p-6 hover:border-neon-orange transition-colors">
                <div className="text-red-400 text-xl font-bold mb-2">{villain.name}</div>
                <div className="text-gray-300 mb-2">{villain.description}</div>
                <Badge variant={villain.threat === 'Критическая' ? 'destructive' : 'secondary'}>
                  {villain.threat}
                </Badge>
              </Card>
            ))}
          </div>
        );
      default:
        return (
          <div className="relative bg-dark-card rounded-lg border-2 border-neon-cyan h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <h3 className="text-neon-cyan text-2xl font-bold p-4 animate-neon-glow">Интерактивная Карта Ниндзяго</h3>
            <div className="relative h-full">
              {locations.map((location) => (
                <button
                  key={location.id}
                  className={`absolute w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    selectedLocation === location.id 
                      ? 'bg-neon-yellow border-neon-yellow scale-150' 
                      : 'bg-neon-cyan border-neon-cyan hover:scale-125'
                  }`}
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  onClick={() => setSelectedLocation(location.id)}
                />
              ))}
            </div>
            {selectedLocation && (
              <Card className="absolute bottom-4 left-4 right-4 bg-dark-bg/90 border-neon-yellow p-4">
                <div className="text-neon-yellow font-bold">
                  {locations.find(l => l.id === selectedLocation)?.name}
                </div>
                <div className="text-gray-300 text-sm">
                  {locations.find(l => l.id === selectedLocation)?.description}
                </div>
              </Card>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="text-center py-12 bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20">
        <h1 className="text-6xl font-bold text-neon-cyan animate-neon-glow mb-4">
          НИНДЗЯГО
        </h1>
        <h2 className="text-3xl font-bold text-neon-magenta mb-6">FACTS</h2>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto px-4">
          Погрузитесь в мир спинджитцу, элементальных сил и эпических сражений
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 p-6 bg-dark-bg/50">
        {[
          { id: 'main', label: 'Карта', icon: 'Map' },
          { id: 'characters', label: 'Персонажи', icon: 'Users' },
          { id: 'seasons', label: 'Сезоны', icon: 'Play' },
          { id: 'villains', label: 'Злодеи', icon: 'Skull' },
        ].map((nav) => (
          <Button
            key={nav.id}
            variant={activeSection === nav.id ? "default" : "outline"}
            onClick={() => setActiveSection(nav.id)}
            className={`border-2 ${
              activeSection === nav.id 
                ? 'bg-neon-cyan text-black border-neon-cyan' 
                : 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20'
            }`}
          >
            <Icon name={nav.icon} size={20} className="mr-2" />
            {nav.label}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-12">
        {renderSection()}
      </div>

      {/* Facts Section */}
      <div className="bg-gradient-to-r from-neon-magenta/10 to-neon-cyan/10 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-neon-magenta text-center mb-8 animate-neon-glow">
            Интересные Факты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-dark-card border-2 border-neon-green p-6">
              <Icon name="Zap" size={32} className="text-neon-yellow mb-4" />
              <h3 className="text-neon-green font-bold text-lg mb-2">Спинджитцу</h3>
              <p className="text-gray-300">Древняя техника боевых искусств, позволяющая ниндзя вращаться как торнадо</p>
            </Card>
            <Card className="bg-dark-card border-2 border-neon-orange p-6">
              <Icon name="Sword" size={32} className="text-neon-orange mb-4" />
              <h3 className="text-neon-orange font-bold text-lg mb-2">4 Золотых Оружия</h3>
              <p className="text-gray-300">Меч Огня, Нунчаки Молнии, Коса Землетрясений и Сюрикены Льда</p>
            </Card>
            <Card className="bg-dark-card border-2 border-neon-cyan p-6">
              <Icon name="Crown" size={32} className="text-neon-magenta mb-4" />
              <h3 className="text-neon-cyan font-bold text-lg mb-2">Зеленый Ниндзя</h3>
              <p className="text-gray-300">Легендарный воин, способный владеть всеми элементами одновременно</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
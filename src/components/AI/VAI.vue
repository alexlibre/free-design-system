<template>
  <div style="display: flex; gap: 24px; align-items: flex-start">
  <div>
    <canvas
      ref="canvasAI"
        :width="settings.width"
        :height="settings.height"
        :style="`width: ${settings.width}px; height: ${settings.height}px; border: 1px solid #42a5f0`"
      @click="clickCell"
    ></canvas>
    <br />
      <div style="margin-top: 16px; display: flex; gap: 24px; align-items: flex-start">
        <div>
          <p>Хищники: {{ predatorsCount }} / Травоядные: {{ herbivoresCount }}</p>
          <p>Родилось: {{ born }} / Погибло: {{ dead }}</p>
          <p>Размножений: {{ divisions }}</p>
          <p>Мутаций (травоядный → хищник): {{ mutations }}</p>
          <p>Мутаций параметров хищников: {{ predatorMutations }}</p>
          <p>Мутаций параметров травоядных: {{ herbivoreMutations }}</p>
          <p>Энергия хищников: {{ avgPredatorEnergy.toFixed(2) }}%</p>
          <p>Энергия травоядных: {{ avgHerbivoreEnergy.toFixed(2) }}%</p>
          <p>Поколение хищников: {{ avgPredatorGeneration.toFixed(1) }}</p>
          <p>Поколение травоядных: {{ avgHerbivoreGeneration.toFixed(1) }}</p>
          <div style="margin-top: 12px; display: flex; gap: 8px; align-items: center">
            <span>Скорость:</span>
            <button
              @click="settings.simulationSpeed = 1"
              :style="`padding: 4px 12px; border: 1px solid var(--color-gray-2); border-radius: 4px; background: ${settings.simulationSpeed === 1 ? 'var(--color-blue-5)' : 'transparent'}; color: ${settings.simulationSpeed === 1 ? 'white' : 'inherit'}; cursor: pointer`"
            >
              1x
            </button>
            <button
              @click="settings.simulationSpeed = 2"
              :style="`padding: 4px 12px; border: 1px solid var(--color-gray-2); border-radius: 4px; background: ${settings.simulationSpeed === 2 ? 'var(--color-blue-5)' : 'transparent'}; color: ${settings.simulationSpeed === 2 ? 'white' : 'inherit'}; cursor: pointer`"
            >
              2x
            </button>
            <button
              @click="settings.simulationSpeed = 4"
              :style="`padding: 4px 12px; border: 1px solid var(--color-gray-2); border-radius: 4px; background: ${settings.simulationSpeed === 4 ? 'var(--color-blue-5)' : 'transparent'}; color: ${settings.simulationSpeed === 4 ? 'white' : 'inherit'}; cursor: pointer`"
            >
              4x
            </button>
          </div>
        </div>
        <div style="min-width: 150px;">
          <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 14px">Отображение</h4>
          <div style="display: flex; flex-direction: column; gap: 8px">
            <v-switch
              :checked="showVisionCones"
              @checked="showVisionCones = $event"
              label="Конусы обзора"
            />
            <v-switch
              :checked="showMass"
              @checked="showMass = $event"
              label="Масса"
            />
            <v-switch
              :checked="showEnergy"
              @checked="showEnergy = $event"
              label="Энергия"
            />
          </div>
        </div>
      </div>
    </div>

    <div style="min-width: 150px; padding-right: 10px; max-height: 600px; overflow-y: auto">
      <h3 style="margin-top: 0">Настройки</h3>

      <div style="margin-bottom: 24px">
        <h4>Общие</h4>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.width"
            label="Ширина"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.height"
            label="Высота"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.predators"
            label="Хищников"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivores"
            label="Травоядных"
            type="number"
            restrict="int"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px">
        <h4>Хищники</h4>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.predatorMass"
            label="Масса"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.predatorVisionRadius"
            label="Радиус зрения"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="predatorVisionAngleDegrees"
            label="Угол зрения (градусы)"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.predatorDivisionMass"
            label="Масса для размножения"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.predatorMetabolism"
            label="Метаболизм (% за кадр)"
            type="number"
            restrict="float"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px">
        <h4>Травоядные</h4>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreMass"
            label="Масса"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreVisionRadius"
            label="Радиус зрения"
            type="number"
            restrict="int"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreDivisionMass"
            label="Масса для размножения"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreGrowthPercent"
            label="Рост (% массы)"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreMetabolism"
            label="Метаболизм (% за кадр)"
            type="number"
            restrict="float"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px">
        <h4>Ускорение</h4>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.accelerationEnergyCost"
            label="Стоимость энергии (% массы)"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.accelerationForce"
            label="Сила ускорения"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.accelerationDuration"
            label="Длительность (кадры)"
            type="number"
            restrict="int"
          />
        </div>
      </div>

      <div style="margin-bottom: 24px">
        <h4>Эволюция</h4>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.mutationRate"
            label="Сила мутаций (%)"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.mutationChance"
            label="Вероятность мутации (%)"
            type="number"
            restrict="float"
          />
        </div>
        <div style="margin-bottom: 8px">
          <v-input
            v-model.number="settings.herbivoreToPredatorMutation"
            label="Мутация травоядного → хищник (%)"
            type="number"
            restrict="float"
          />
        </div>
      </div>

      <button @click="resetSimulation" style="width: 100%; padding: 8px; margin-top: 16px">
        Перезапустить симуляцию
      </button>
    </div>

    <div style="min-width: 500px; max-height: 600px; overflow-y: auto">
      <h3 style="margin-top: 0">Характеристики организмов</h3>
      <div style="margin-bottom: 8px">
        <v-select
          v-model="organismFilter"
          label="Фильтр по типу"
          :options="[
            { value: 'all', label: 'Все' },
            { value: 'predator', label: 'Хищники' },
            { value: 'herbivore', label: 'Травоядные' }
          ]"
          placeholder="Все"
        />
      </div>
      <div style="margin-bottom: 8px">
        <v-select
          v-model="sortBy"
          label="Сортировка"
          :options="[
            { value: 'id', label: 'ID' },
            { value: 'generation', label: 'Поколение' },
            { value: 'mass', label: 'Масса' },
            { value: 'energy', label: 'Энергия' },
            { value: 'visionRadius', label: 'Радиус зрения' }
          ]"
          placeholder="ID"
        />
      </div>
      <div style="overflow-x: auto">
        <table style="width: 100%; border-collapse: collapse; font-size: 10px">
          <thead>
            <tr style="background: var(--color-gray-1); position: sticky; top: 0">
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">ID</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Тип</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Покол.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Масса</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Энергия</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Рад. зрен.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Угол зрен.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Метабол.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Набор эн.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Масса разм.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Сила уск.</th>
              <th style="padding: 6px; border: 1px solid var(--color-gray-2); text-align: left">Стоим. уск.</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="organism in sortedOrganisms"
              :key="organism.id"
              :style="`background: ${organism.type === 'predator' ? 'rgba(255, 68, 68, 0.1)' : 'rgba(68, 255, 68, 0.1)'}`"
            >
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.id }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">
                {{ organism.type === "predator" ? "Хищ." : "Трав." }}
              </td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.generation.toFixed(0) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.mass.toFixed(2) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">
                {{ ((organism.energy / (organism.mass * 100)) * 100).toFixed(1) }}%
              </td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.visionRadius.toFixed(1) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">
                {{ ((organism.traits.visionAngle * 180) / Math.PI).toFixed(1) }}°
              </td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.metabolism.toFixed(2) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">
                {{ organism.traits.energyGainRate.toFixed(2) }}
              </td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.divisionMass.toFixed(2) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.accelerationForce.toFixed(2) }}</td>
              <td style="padding: 4px; border: 1px solid var(--color-gray-2)">{{ organism.traits.accelerationEnergyCost.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: 8px; font-size: 12px; color: var(--color-gray-4)">
        Всего организмов: {{ filteredOrganisms.length }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import VSwitch from "@/components/Switch/VSwitch.vue";
import VInput from "@/components/Input/VInput.vue";
import VSelect from "@/components/Select/VSelect.vue";

// Реактивные настройки
const settings = ref({
  width: 680,
  height: 480,
  predators: 0,
  herbivores: 50,
  // Хищники
  predatorMass: 2,
  predatorVisionRadius: 75,
  predatorVisionAngle: Math.PI / 6, // 30 градусов
  predatorDivisionMass: 4,
  predatorMetabolism: 0.05,
  // Травоядные
  herbivoreMass: 1,
  herbivoreVisionRadius: 120,
  herbivoreDivisionMass: 2,
  herbivoreGrowthTime: 10,
  herbivoreGrowthPercent: 33,
  herbivoreMetabolism: 0.01,
  // Общие
  accelerationEnergyCost: 2,
  accelerationForce: 0.5,
  accelerationDuration: 30,
  // Эволюция
  mutationRate: 5, // 5% изменения при мутации
  mutationChance: 30, // 30% вероятность мутации каждой характеристики
  herbivoreToPredatorMutation: 1, // 1% вероятность мутации травоядного в хищника при размножении
  // Управление скоростью
  simulationSpeed: 1, // множитель скорости симуляции (1x, 2x, 4x)
});

// Угол зрения в градусах для удобства редактирования
const predatorVisionAngleDegrees = computed({
  get: () => Math.round((settings.value.predatorVisionAngle * 180) / Math.PI),
  set: (val: number) => {
    settings.value.predatorVisionAngle = (val * Math.PI) / 180;
  },
});

// Используем settings вместо props
const props = computed(() => settings.value);

type OrganismType = "predator" | "herbivore";

// Эволюционные характеристики организма
interface EvolutionTraits {
  visionRadius: number; // радиус зрения
  visionAngle: number; // угол зрения (только для хищников)
  metabolism: number; // метаболизм (% от массы за кадр)
  energyGainRate: number; // скорость набора энергии (только для травоядных)
  divisionMass: number; // масса для размножения
  accelerationForce: number; // сила ускорения
  accelerationEnergyCost: number; // стоимость ускорения (% от массы)
  generation: number; // поколение (для статистики)
}

interface Organism {
  id: number;
  type: OrganismType;
  x: number;
  y: number;
  velocity: { x: number; y: number };
  mass: number;
  radius: number;
  energy: number; // энергия в % от массы (100% = полная масса)
  angle: number; // направление движения
  accelerationTimer: number; // таймер ускорения
  age: number; // возраст в кадрах (для травоядных)
  color: string;
  lastAngleChange: number; // время последнего изменения угла (для хищников)
  traits: EvolutionTraits; // эволюционные характеристики
}

const canvasAI = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const fps = 60;
const frameTime = 1000 / fps;
let animationFrameId: number | null = null;
let lastFrameTime = 0;
const organisms = ref<Organism[]>([]);
const newId = ref(0);
const born = ref(0);
const dead = ref(0);
const divisions = ref(0);
const mutations = ref(0);
const predatorMutations = ref(0);
const herbivoreMutations = ref(0);

// Spatial Grid для оптимизации поиска
const GRID_CELL_SIZE = 100; // размер ячейки сетки
type SpatialGrid = Map<string, Organism[]>;

// Получить ключ ячейки для координат
const getGridKey = (x: number, y: number, width: number, height: number): string => {
  // Нормализуем координаты для бесшовных границ
  let normX = x;
  let normY = y;
  while (normX < 0) normX += width;
  while (normX >= width) normX -= width;
  while (normY < 0) normY += height;
  while (normY >= height) normY -= height;
  
  const cellX = Math.floor(normX / GRID_CELL_SIZE);
  const cellY = Math.floor(normY / GRID_CELL_SIZE);
  return `${cellX},${cellY}`;
};

// Получить все ключи ячеек в радиусе (с учетом бесшовных границ)
const getGridKeysInRadius = (
  centerX: number,
  centerY: number,
  radius: number,
  width: number,
  height: number
): string[] => {
  const keys: string[] = [];
  const cellRadius = Math.ceil(radius / GRID_CELL_SIZE) + 1; // +1 для безопасности
  
  // Получаем центральную ячейку
  const centerCellX = Math.floor(centerX / GRID_CELL_SIZE);
  const centerCellY = Math.floor(centerY / GRID_CELL_SIZE);
  
  // Проверяем все ячейки в радиусе
  for (let dx = -cellRadius; dx <= cellRadius; dx++) {
    for (let dy = -cellRadius; dy <= cellRadius; dy++) {
      let cellX = centerCellX + dx;
      let cellY = centerCellY + dy;
      
      // Учитываем бесшовные границы
      const maxCellsX = Math.ceil(width / GRID_CELL_SIZE);
      const maxCellsY = Math.ceil(height / GRID_CELL_SIZE);
      
      while (cellX < 0) cellX += maxCellsX;
      while (cellX >= maxCellsX) cellX -= maxCellsX;
      while (cellY < 0) cellY += maxCellsY;
      while (cellY >= maxCellsY) cellY -= maxCellsY;
      
      keys.push(`${cellX},${cellY}`);
    }
  }
  
  return keys;
};

// Построить spatial grid из организмов
const buildSpatialGrid = (organismsList: Organism[], width: number, height: number): SpatialGrid => {
  const grid: SpatialGrid = new Map();
  
  for (const organism of organismsList) {
    const key = getGridKey(organism.x, organism.y, width, height);
    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key)!.push(organism);
  }
  
  return grid;
};

// Настройки отображения
const showVisionCones = ref(false);
const showMass = ref(false);
const showEnergy = ref(false);

const predatorsCount = computed(() => {
  return organisms.value.filter((o) => o.type === "predator").length;
});

const herbivoresCount = computed(() => {
  return organisms.value.filter((o) => o.type === "herbivore").length;
});

const avgPredatorEnergy = computed(() => {
  const predators = organisms.value.filter((o) => o.type === "predator");
  if (predators.length === 0) return 0;
  const sum = predators.reduce((acc, p) => acc + p.energy, 0);
  return sum / predators.length;
});

const avgHerbivoreEnergy = computed(() => {
  const herbivores = organisms.value.filter((o) => o.type === "herbivore");
  if (herbivores.length === 0) return 0;
  const sum = herbivores.reduce((acc, h) => acc + h.energy, 0);
  return sum / herbivores.length;
});

const avgPredatorGeneration = computed(() => {
  const predators = organisms.value.filter((o) => o.type === "predator");
  if (predators.length === 0) return 0;
  const sum = predators.reduce((acc, p) => acc + p.traits.generation, 0);
  return sum / predators.length;
});

const avgHerbivoreGeneration = computed(() => {
  const herbivores = organisms.value.filter((o) => o.type === "herbivore");
  if (herbivores.length === 0) return 0;
  const sum = herbivores.reduce((acc, h) => acc + h.traits.generation, 0);
  return sum / herbivores.length;
});

// Фильтр и сортировка для таблицы организмов
const organismFilter = ref<"all" | "predator" | "herbivore">("all");
const sortBy = ref<"id" | "generation" | "mass" | "energy" | "visionRadius">("id");

const filteredOrganisms = computed(() => {
  if (organismFilter.value === "all") {
    return organisms.value;
  }
  return organisms.value.filter((o) => o.type === organismFilter.value);
});

const sortedOrganisms = computed(() => {
  const filtered = [...filteredOrganisms.value];
  
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case "id":
        return a.id - b.id;
      case "generation":
        return b.traits.generation - a.traits.generation; // по убыванию
      case "mass":
        return b.mass - a.mass; // по убыванию
      case "energy":
        const energyA = (a.energy / (a.mass * 100)) * 100;
        const energyB = (b.energy / (b.mass * 100)) * 100;
        return energyB - energyA; // по убыванию
      case "visionRadius":
        return b.traits.visionRadius - a.traits.visionRadius; // по убыванию
      default:
        return 0;
    }
  });
  
  return filtered;
});

// Проверка, находится ли цель в конусе зрения (с учетом бесшовных границ)
const isInVisionCone = (
  organism: Organism,
  target: Organism,
  visionRadius: number,
  visionAngle: number,
  width: number,
  height: number
): boolean => {
  let dx = target.x - organism.x;
  let dy = target.y - organism.y;
  
  // Учитываем бесшовные границы при вычислении расстояния
  if (Math.abs(dx) > width / 2) {
    dx = dx > 0 ? dx - width : dx + width;
  }
  if (Math.abs(dy) > height / 2) {
    dy = dy > 0 ? dy - height : dy + height;
  }
  
  const distSquared = dx * dx + dy * dy;

  if (distSquared > visionRadius * visionRadius) return false;

  // Вычисляем угол к цели
  const targetAngle = Math.atan2(-dy, dx); // -dy потому что y инвертирован
  let angleDiff = Math.abs(targetAngle - organism.angle);

  // Нормализуем разницу углов
  const normalizedDiff = Math.min(angleDiff, 2 * Math.PI - angleDiff);

  return normalizedDiff <= visionAngle / 2;
};

// Применение ускорения (только по прямой в направлении текущего угла)
const applyAcceleration = (organism: Organism) => {
  const energyCost = (organism.mass * organism.traits.accelerationEnergyCost) / 100;
  if (organism.energy < energyCost) return false;

  organism.energy -= energyCost;
  organism.accelerationTimer = props.value.accelerationDuration;

  // Ускорение только по прямой в направлении текущего угла
  const force = organism.traits.accelerationForce;
  organism.velocity.x += Math.cos(organism.angle) * force;
  organism.velocity.y -= Math.sin(organism.angle) * force; // - потому что y инвертирован

  return true;
};

// Поворот хищника к травоядному
const turnTowardsPrey = (predator: Organism, prey: Organism) => {
  // Вычисляем направление от хищника к травоядному
  const dx = prey.x - predator.x;
  const dy = prey.y - predator.y;
  const angleToPrey = Math.atan2(-dy, dx); // угол к травоядному

  // Плавно поворачиваемся к цели
  const turnSpeed = 0.15; // скорость поворота (быстрее, чем у травоядных)
  let targetAngle = angleToPrey;

  // Вычисляем разницу углов
  let angleDiff = targetAngle - predator.angle;
  
  // Нормализуем разницу в диапазон [-PI, PI]
  while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
  while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

  // Плавно поворачиваем
  predator.angle += angleDiff * turnSpeed;

  // Нормализуем угол
  while (predator.angle > Math.PI * 2) predator.angle -= Math.PI * 2;
  while (predator.angle < 0) predator.angle += Math.PI * 2;

  // Обновляем скорость в соответствии с новым углом
  const currentSpeed = Math.sqrt(
    predator.velocity.x * predator.velocity.x + predator.velocity.y * predator.velocity.y
  );
  if (currentSpeed > 0.1) {
    predator.velocity.x = Math.cos(predator.angle) * currentSpeed;
    predator.velocity.y = -Math.sin(predator.angle) * currentSpeed;
  }
};

// Поворот травоядного от хищника
const turnAwayFromPredator = (herbivore: Organism, predator: Organism) => {
  // Вычисляем направление от хищника к травоядному
  const dx = herbivore.x - predator.x;
  const dy = herbivore.y - predator.y;
  const angleToPredator = Math.atan2(-dy, dx); // угол к хищнику

  // Плавно поворачиваемся в противоположную сторону
  const turnSpeed = 0.1; // скорость поворота
  let targetAngle = angleToPredator; // направление от хищника

  // Вычисляем разницу углов
  let angleDiff = targetAngle - herbivore.angle;
  
  // Нормализуем разницу в диапазон [-PI, PI]
  while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
  while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

  // Плавно поворачиваем
  herbivore.angle += angleDiff * turnSpeed;

  // Нормализуем угол
  while (herbivore.angle > Math.PI * 2) herbivore.angle -= Math.PI * 2;
  while (herbivore.angle < 0) herbivore.angle += Math.PI * 2;

  // Обновляем скорость в соответствии с новым углом
  const currentSpeed = Math.sqrt(
    herbivore.velocity.x * herbivore.velocity.x + herbivore.velocity.y * herbivore.velocity.y
  );
  if (currentSpeed > 0.1) {
    herbivore.velocity.x = Math.cos(herbivore.angle) * currentSpeed;
    herbivore.velocity.y = -Math.sin(herbivore.angle) * currentSpeed;
  }
};

// Рендеринг организма
const renderOrganism = (organism: Organism) => {
  if (!ctx.value) return;

  // Тело организма
  ctx.value.fillStyle = organism.color;
  ctx.value.beginPath();
  ctx.value.arc(organism.x, organism.y, organism.radius, 0, Math.PI * 2);
  ctx.value.fill();

  // Конус зрения (сектор круга)
  if (showVisionCones.value) {
    const visionAngle = organism.traits.visionAngle;
    const visionRadius = organism.traits.visionRadius;
    // Вычисляем начальный и конечный углы сектора
    const startAngle = organism.angle - visionAngle / 2;
    const endAngle = organism.angle + visionAngle / 2;
    
    ctx.value.fillStyle = organism.type === "predator" 
      ? "rgba(255, 0, 0, 0.15)" 
      : "rgba(0, 255, 0, 0.15)";
    ctx.value.beginPath();
    ctx.value.moveTo(organism.x, organism.y);
    // Рисуем дугу сектора (инвертируем углы, так как y-ось инвертирована в canvas)
    ctx.value.arc(
      organism.x, 
      organism.y, 
      visionRadius, 
      -startAngle, // начальный угол (инвертирован)
      -endAngle,   // конечный угол (инвертирован)
      true         // против часовой стрелки
    );
    ctx.value.closePath();
    ctx.value.fill();
  }

  // Отображение массы (число над организмом)
  if (showMass.value) {
    ctx.value.fillStyle = organism.type === "predator" ? "#ff4444" : "#44ff44";
    ctx.value.font = "12px Arial";
    ctx.value.textAlign = "center";
    ctx.value.textBaseline = "middle";
    const massText = organism.mass.toFixed(1);
    let yOffset = 0;
    if (showEnergy.value) {
      yOffset = -25; // если показываем энергию, масса выше
    } else {
      yOffset = -12; // иначе ближе к организму
    }
    ctx.value.fillText(
      massText,
      organism.x,
      organism.y - organism.radius + yOffset
    );
  }

  // Отображение энергии (число под массой)
  if (showEnergy.value) {
    const maxEnergy = organism.mass * 100; // 100% от массы
    const energyPercent = Math.min((organism.energy / maxEnergy) * 100, 100); // ограничиваем до 100%
    const energyText = energyPercent.toFixed(0) + "%";
    
    // Цвет энергии зависит от процента
    ctx.value.fillStyle =
      energyPercent > 50 ? "#00ff00" : energyPercent > 25 ? "#ffff00" : "#ff0000";
    ctx.value.font = "10px Arial";
    ctx.value.textAlign = "center";
    ctx.value.textBaseline = "middle";
    let yOffset = -12;
    if (showMass.value) {
      yOffset = -38; // если показываем массу, энергия ниже массы
    }
    ctx.value.fillText(
      energyText,
      organism.x,
      organism.y - organism.radius + yOffset
    );
  }
};

// Функция мутации характеристики
// Возвращает новое значение и информацию о том, произошла ли мутация
const mutateTrait = (
  value: number,
  mutationRate: number,
  mutationChance: number
): { value: number; mutated: boolean } => {
  if (Math.random() * 100 > mutationChance) {
    return { value, mutated: false };
  }
  
  const mutation = (Math.random() - 0.5) * 2 * (mutationRate / 100); // от -mutationRate% до +mutationRate%
  return { value: Math.max(0.01, value * (1 + mutation)), mutated: true }; // минимум 0.01, чтобы не было нуля
};

// Создание нового организма
const createOrganism = (
  type: OrganismType,
  x: number,
  y: number,
  mass?: number,
  parentTraits?: EvolutionTraits
): Organism => {
  const baseMass = type === "predator" ? props.value.predatorMass : props.value.herbivoreMass;
  const organismMass = mass || baseMass;
  const color = type === "predator" ? "#ff4444" : "#44ff44";

  // Инициализация эволюционных характеристик
  let traits: EvolutionTraits;
  
  if (parentTraits) {
    // Наследование от родителя с мутациями
    const mutationRate = props.value.mutationRate;
    const mutationChance = props.value.mutationChance;
    
    // Подсчитываем мутации
    let mutationCount = 0;
    
    const visionRadiusResult = mutateTrait(parentTraits.visionRadius, mutationRate, mutationChance);
    if (visionRadiusResult.mutated) mutationCount++;
    
    const visionAngleResult = mutateTrait(parentTraits.visionAngle, mutationRate, mutationChance);
    if (visionAngleResult.mutated) mutationCount++;
    
    const metabolismResult = mutateTrait(parentTraits.metabolism, mutationRate, mutationChance);
    if (metabolismResult.mutated) mutationCount++;
    
    const energyGainRateResult = mutateTrait(parentTraits.energyGainRate, mutationRate, mutationChance);
    if (energyGainRateResult.mutated) mutationCount++;
    
    const divisionMassResult = mutateTrait(parentTraits.divisionMass, mutationRate, mutationChance);
    if (divisionMassResult.mutated) mutationCount++;
    
    const accelerationForceResult = mutateTrait(parentTraits.accelerationForce, mutationRate, mutationChance);
    if (accelerationForceResult.mutated) mutationCount++;
    
    const accelerationEnergyCostResult = mutateTrait(parentTraits.accelerationEnergyCost, mutationRate, mutationChance);
    if (accelerationEnergyCostResult.mutated) mutationCount++;
    
    // Увеличиваем счетчик мутаций в зависимости от типа
    if (mutationCount > 0) {
      if (type === "predator") {
        predatorMutations.value += mutationCount;
      } else {
        herbivoreMutations.value += mutationCount;
      }
    }
    
    traits = {
      visionRadius: visionRadiusResult.value,
      visionAngle: visionAngleResult.value,
      metabolism: metabolismResult.value,
      energyGainRate: energyGainRateResult.value,
      divisionMass: divisionMassResult.value,
      accelerationForce: accelerationForceResult.value,
      accelerationEnergyCost: accelerationEnergyCostResult.value,
      generation: parentTraits.generation + 1,
    };
  } else {
    // Начальные характеристики из настроек
    if (type === "predator") {
      traits = {
        visionRadius: props.value.predatorVisionRadius,
        visionAngle: props.value.predatorVisionAngle,
        metabolism: props.value.predatorMetabolism,
        energyGainRate: 0, // не используется для хищников
        divisionMass: props.value.predatorDivisionMass,
        accelerationForce: props.value.accelerationForce,
        accelerationEnergyCost: props.value.accelerationEnergyCost,
        generation: 0,
      };
    } else {
      traits = {
        visionRadius: props.value.herbivoreVisionRadius,
        visionAngle: Math.PI, // 180 градусов для травоядных
        metabolism: props.value.herbivoreMetabolism,
        energyGainRate: 0.02, // базовая скорость набора энергии
        divisionMass: props.value.herbivoreDivisionMass,
        accelerationForce: props.value.accelerationForce,
        accelerationEnergyCost: props.value.accelerationEnergyCost,
        generation: 0,
      };
    }
  }

  return {
    id: ++newId.value,
    type,
    x,
    y,
        velocity: {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    },
    mass: organismMass,
    radius: organismMass * 3,
    energy: organismMass * 100, // начальная энергия = 100% от массы
    angle: Math.random() * Math.PI * 2,
    accelerationTimer: 0,
    age: 0,
    lastAngleChange: 0,
    color,
    traits,
  };
};

// Размножение организма
const divideOrganism = (organism: Organism): Organism | null => {
  // Используем эволюционную характеристику для массы размножения
  const divisionMass = organism.traits.divisionMass;

  // Проверяем массу для размножения
  if (organism.mass < divisionMass) return null;

  // Проверяем минимальную энергию для размножения (нужна энергия для деления)
  const minEnergyForDivision = organism.mass * 30; // минимум 30% от массы
  if (organism.energy < minEnergyForDivision) return null;

  const newMass = organism.mass / 2;
  organism.mass = newMass;
  organism.radius = newMass * 3;
  // Энергия распределяется между двумя организмами
  const energyPerOrganism = organism.energy / 2;
  organism.energy = energyPerOrganism;

  // Пытаемся найти подходящее место для нового организма
  const offset = Math.max(organism.radius * 2.5, newMass * 3 * 2.5);
  let newX = 0;
  let newY = 0;
  let foundPosition = false;

  // Пробуем несколько случайных позиций вокруг родителя
  for (let attempt = 0; attempt < 10; attempt++) {
    const angle = Math.random() * Math.PI * 2;
    let testX = organism.x + Math.cos(angle) * offset;
    let testY = organism.y + Math.sin(angle) * offset;

    // Нормализуем позиции для бесшовных границ
    while (testX < 0) testX += props.value.width;
    while (testX >= props.value.width) testX -= props.value.width;
    while (testY < 0) testY += props.value.height;
    while (testY >= props.value.height) testY -= props.value.height;

    newX = testX;
    newY = testY;
    foundPosition = true;
    break;
  }

  // Если не нашли позицию, пробуем разместить в противоположной стороне от центра
  if (!foundPosition) {
    const centerX = props.value.width / 2;
    const centerY = props.value.height / 2;
    const dx = organism.x - centerX;
    const dy = organism.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist > 0) {
      let testX = organism.x - (dx / dist) * offset;
      let testY = organism.y - (dy / dist) * offset;
      
      // Нормализуем позиции для бесшовных границ
      while (testX < 0) testX += props.value.width;
      while (testX >= props.value.width) testX -= props.value.width;
      while (testY < 0) testY += props.value.height;
      while (testY >= props.value.height) testY -= props.value.height;
      
      newX = testX;
      newY = testY;
      foundPosition = true;
    }
  }

  // Если все еще не нашли позицию, возвращаем null
  if (!foundPosition) return null;

  // Проверка мутации травоядного в хищника
  let newType: OrganismType = organism.type;
  if (organism.type === "herbivore" && Math.random() * 100 < props.value.herbivoreToPredatorMutation) {
    // Мутация произошла - травоядное превращается в хищника
    newType = "predator";
    mutations.value += 1;
  }

  // Создаем потомка с наследованием traits от родителя
  // Если произошла мутация в хищника, адаптируем характеристики
  let newTraits: EvolutionTraits | undefined = organism.traits;
  
  if (newType === "predator" && organism.type === "herbivore") {
    // Адаптируем характеристики травоядного для хищника
    const mutationRate = props.value.mutationRate;
    const mutationChance = props.value.mutationChance;
    
    // Создаем базовые характеристики хищника на основе травоядного
    // Адаптируем характеристики: радиус зрения может быть меньше, угол зрения должен быть узким
    const visionRadiusResult = mutateTrait(
      Math.min(organism.traits.visionRadius * 0.7, props.value.predatorVisionRadius * 1.2),
      mutationRate,
      mutationChance
    );
    const visionAngleResult = mutateTrait(
      // Узкий угол зрения для хищника (как у базовых хищников)
      Math.max(props.value.predatorVisionAngle * 0.5, Math.min(organism.traits.visionAngle * 0.3, props.value.predatorVisionAngle * 1.5)),
      mutationRate,
      mutationChance
    );
    const metabolismResult = mutateTrait(
      Math.max(organism.traits.metabolism * 2, props.value.predatorMetabolism * 0.5),
      mutationRate,
      mutationChance
    );
    const divisionMassResult = mutateTrait(
      Math.max(organism.traits.divisionMass, props.value.predatorDivisionMass * 0.5),
      mutationRate,
      mutationChance
    );
    const accelerationForceResult = mutateTrait(organism.traits.accelerationForce, mutationRate, mutationChance);
    const accelerationEnergyCostResult = mutateTrait(organism.traits.accelerationEnergyCost, mutationRate, mutationChance);
    
    // Подсчитываем мутации параметров при превращении
    let mutationCount = 0;
    if (visionRadiusResult.mutated) mutationCount++;
    if (visionAngleResult.mutated) mutationCount++;
    if (metabolismResult.mutated) mutationCount++;
    if (divisionMassResult.mutated) mutationCount++;
    if (accelerationForceResult.mutated) mutationCount++;
    if (accelerationEnergyCostResult.mutated) mutationCount++;
    if (mutationCount > 0) {
      predatorMutations.value += mutationCount;
    }
    
    newTraits = {
      visionRadius: visionRadiusResult.value,
      visionAngle: visionAngleResult.value,
      metabolism: metabolismResult.value,
      energyGainRate: 0, // хищники не набирают энергию движением
      divisionMass: divisionMassResult.value,
      accelerationForce: accelerationForceResult.value,
      accelerationEnergyCost: accelerationEnergyCostResult.value,
      generation: organism.traits.generation + 1,
    };
  }
  
  const newOrganism = createOrganism(newType, newX, newY, newMass, newTraits);
  newOrganism.energy = energyPerOrganism;
  newOrganism.angle = organism.angle + (Math.random() - 0.5) * Math.PI;
  newOrganism.lastAngleChange = organism.lastAngleChange;
  
  // Потомок получает минимальную скорость родителя в момент размножения
  const parentSpeed = Math.sqrt(
    organism.velocity.x * organism.velocity.x + organism.velocity.y * organism.velocity.y
  );
  const minSpeed = Math.max(parentSpeed, 0.3); // минимум 0.3 или скорость родителя, если она больше
  newOrganism.velocity.x = Math.cos(newOrganism.angle) * minSpeed;
  newOrganism.velocity.y = -Math.sin(newOrganism.angle) * minSpeed;
  
  // Родитель также получает минимальную скорость
  organism.velocity.x = Math.cos(organism.angle) * minSpeed;
  organism.velocity.y = -Math.sin(organism.angle) * minSpeed;
  
  divisions.value += 1;
  born.value += 1;

  return newOrganism;
};

// Обработка клика для создания организмов
const clickCell = ($event: MouseEvent) => {
  if (!canvasAI.value) return;
  const rect = canvasAI.value.getBoundingClientRect();
  const x = $event.x - rect.left;
  const y = $event.y - rect.top;

  // Создаем травоядное при клике
  const newOrganism = createOrganism("herbivore", x, y);
  organisms.value.push(newOrganism);
  born.value += 1;
};

// Основной цикл рендеринга
const render = (currentTime: number) => {
  if (!ctx.value) return;

  // Контроль частоты кадров с учетом скорости симуляции
  const adjustedFrameTime = frameTime / props.value.simulationSpeed;
  if (currentTime - lastFrameTime < adjustedFrameTime) {
    animationFrameId = requestAnimationFrame(render);
    return;
  }

  lastFrameTime = currentTime;

  // Очистка canvas
  ctx.value.fillStyle = "#ffffff";
  ctx.value.fillRect(0, 0, props.value.width, props.value.height);

  // Обновление всех организмов (выполняем несколько раз при ускорении)
  const speedMultiplier = props.value.simulationSpeed;
  
  for (let updateIteration = 0; updateIteration < speedMultiplier; updateIteration++) {
    const currentOrganismsArray = organisms.value;
    const organismsToRemoveThisIteration = new Set<Organism>();
    const organismsToAddThisIteration: Organism[] = [];
    
    // Построить spatial grid для оптимизации поиска
    const spatialGrid = buildSpatialGrid(currentOrganismsArray, props.value.width, props.value.height);
    
    for (let i = 0; i < currentOrganismsArray.length; i++) {
      const organism = currentOrganismsArray[i];
      if (organismsToRemoveThisIteration.has(organism)) continue;

      organism.age += 1;

      // Хищник периодически меняет угол (небольшие случайные изменения)
      if (organism.type === "predator") {
        const angleChangeInterval = 60; // каждые ~1 секунду при 60 FPS
        if (organism.age - organism.lastAngleChange >= angleChangeInterval) {
          // Небольшое случайное изменение угла
          const angleChange = (Math.random() - 0.5) * 0.3; // ±0.15 радиан (~±8.5 градусов)
          organism.angle += angleChange;
          
          // Нормализуем угол
          while (organism.angle > Math.PI * 2) organism.angle -= Math.PI * 2;
          while (organism.angle < 0) organism.angle += Math.PI * 2;
          
          organism.lastAngleChange = organism.age;
          
          // Обновляем скорость в соответствии с новым углом
          const currentSpeed = Math.sqrt(
            organism.velocity.x * organism.velocity.x + organism.velocity.y * organism.velocity.y
          );
          if (currentSpeed > 0.1) {
            organism.velocity.x = Math.cos(organism.angle) * currentSpeed;
            organism.velocity.y = -Math.sin(organism.angle) * currentSpeed;
          }
        }
      }

      // Обновление угла движения на основе скорости (только если нет активного управления углом)
      if (organism.type === "herbivore") {
        // Для травоядных угол обновляется при повороте от хищника
        if (Math.abs(organism.velocity.x) > 0.01 || Math.abs(organism.velocity.y) > 0.01) {
          const newAngle = Math.atan2(-organism.velocity.y, organism.velocity.x);
          // Плавное обновление угла
          let angleDiff = newAngle - organism.angle;
          while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
          while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
          organism.angle += angleDiff * 0.1; // плавное обновление
        }
      }

      // Поиск целей в конусе зрения (с использованием spatial grid)
      if (organism.type === "predator") {
        // Хищник ищет травоядных
        const visionRadius = organism.traits.visionRadius;
        const gridKeys = getGridKeysInRadius(
          organism.x,
          organism.y,
          visionRadius,
          props.value.width,
          props.value.height
        );
        
        let foundTarget = false;
        for (const key of gridKeys) {
          const cellOrganisms = spatialGrid.get(key) || [];
          for (const target of cellOrganisms) {
            if (
              target !== organism &&
              target.type === "herbivore" &&
              !organismsToRemoveThisIteration.has(target) &&
              isInVisionCone(
                organism,
                target,
                visionRadius,
                organism.traits.visionAngle,
                props.value.width,
                props.value.height
              )
            ) {
              // Хищник видит травоядное - поворачивается к нему и ускоряется
              turnTowardsPrey(organism, target);
              applyAcceleration(organism);
              foundTarget = true;
              break;
            }
          }
          if (foundTarget) break;
        }
      
        // Если хищник не видит травоядное, продолжаем периодическое изменение угла
        // (это уже обрабатывается выше в коде)
      } else {
        // Травоядное ищет хищников
        let predatorSeen = false;
        const visionRadius = organism.traits.visionRadius;
        const gridKeys = getGridKeysInRadius(
          organism.x,
          organism.y,
          visionRadius,
          props.value.width,
          props.value.height
        );
        
        for (const key of gridKeys) {
          const cellOrganisms = spatialGrid.get(key) || [];
          for (const target of cellOrganisms) {
            if (
              target !== organism &&
              target.type === "predator" &&
              !organismsToRemoveThisIteration.has(target) &&
              isInVisionCone(organism, target, visionRadius, organism.traits.visionAngle, props.value.width, props.value.height)
            ) {
              // Травоядное видит хищника - поворачивается от него
              turnAwayFromPredator(organism, target);
              applyAcceleration(organism);
              predatorSeen = true;
              break;
            }
          }
          if (predatorSeen) break;
        }
      
        // Если травоядное не видит хищника, угол постепенно выравнивается со скоростью
        if (!predatorSeen) {
          if (Math.abs(organism.velocity.x) > 0.01 || Math.abs(organism.velocity.y) > 0.01) {
            const targetAngle = Math.atan2(-organism.velocity.y, organism.velocity.x);
            let angleDiff = targetAngle - organism.angle;
            while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
            while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
            organism.angle += angleDiff * 0.05; // медленное выравнивание
          }
        }

        // Травоядные набирают энергию при движении (условное питание)
        const speed = Math.sqrt(
          organism.velocity.x * organism.velocity.x + organism.velocity.y * organism.velocity.y
        );
        const maxEnergyHerbivore = organism.mass * 100;
        
        if (speed > 0.1) {
          // Набираем энергию пропорционально скорости движения и эволюционной характеристике
          // Чем быстрее движение, тем больше энергии набирается (базовая скорость = 0.3)
          // При скорости 0.3 = 1x набора, при скорости 1.0 = ~2.3x набора
          const baseSpeed = 0.3;
          const speedMultiplier = 1 + (speed / baseSpeed) * 0.5;
          const energyGain = organism.mass * organism.traits.energyGainRate * speed * speedMultiplier;
          organism.energy = Math.min(organism.energy + energyGain, maxEnergyHerbivore);
        }

        // Если энергия травоядного достигла 100%, он набирает массу
        if (organism.energy >= maxEnergyHerbivore) {
          const growth = (organism.mass * props.value.herbivoreGrowthPercent) / 100;
          organism.mass += growth;
          organism.radius = organism.mass * 3;
          // После роста энергия немного снижается (часть энергии ушла на рост)
          organism.energy = organism.mass * 80; // 80% после роста
        }
      }

      // Применение ускорения (если активно)
      if (organism.accelerationTimer > 0) {
        organism.accelerationTimer--;
        // Постепенное замедление
        organism.velocity.x *= 0.98;
        organism.velocity.y *= 0.98;
      }

      // Ограничение скорости
      const maxSpeed = 2;
      const speed = Math.sqrt(
        organism.velocity.x * organism.velocity.x + organism.velocity.y * organism.velocity.y
      );
      if (speed > maxSpeed) {
        organism.velocity.x = (organism.velocity.x / speed) * maxSpeed;
        organism.velocity.y = (organism.velocity.y / speed) * maxSpeed;
      }

      // Обновление позиции
      let newX = organism.x + organism.velocity.x;
      let newY = organism.y + organism.velocity.y;

      // Бесшовные границы (телепортация)
      if (newX < 0) {
        newX = props.value.width + newX; // появляется справа
      } else if (newX >= props.value.width) {
        newX = newX - props.value.width; // появляется слева
      }

      if (newY < 0) {
        newY = props.value.height + newY; // появляется снизу
      } else if (newY >= props.value.height) {
        newY = newY - props.value.height; // появляется сверху
      }

      organism.x = newX;
      organism.y = newY;

      // Постепенная потеря энергии (метаболизм) - только для хищников
      // Травоядные не теряют энергию со временем, только тратят на ускорение
      if (organism.type === "predator") {
        const baseMetabolismRate = organism.traits.metabolism;
        // Метаболизм увеличивается пропорционально скорости (базовая скорость = 0.5)
        // При скорости 0.5 = 1x метаболизм, при скорости 2.0 = 3x метаболизм
        const speedMultiplier = 1 + (speed / 0.5) * 0.5;
        const metabolismRate = baseMetabolismRate * speedMultiplier;
        organism.energy -= organism.mass * metabolismRate;
      }

      // Ограничиваем энергию максимумом 100% от массы
      const maxEnergy = organism.mass * 100;
      organism.energy = Math.min(organism.energy, maxEnergy);

      // Проверка на смерть от истощения
      if (organism.energy <= 0) {
        organismsToRemoveThisIteration.add(organism);
        dead.value += 1;
        continue;
      }

      // Проверка на размножение
      const newOrganism = divideOrganism(organism);
      if (newOrganism) {
        organismsToAddThisIteration.push(newOrganism);
      }
    }

    // Перестроить spatial grid после обновления позиций для проверки столкновений
    const collisionGrid = buildSpatialGrid(currentOrganismsArray, props.value.width, props.value.height);
    const processedPairs = new Set<string>();
    
    // Проверка столкновений и поедания (с использованием spatial grid)
    for (let i = 0; i < currentOrganismsArray.length; i++) {
      const organism = currentOrganismsArray[i];
      if (organismsToRemoveThisIteration.has(organism)) continue;

      // Получаем ячейки, которые нужно проверить (текущая и соседние)
      const maxRadius = organism.radius + 50; // добавляем запас для максимального радиуса другого организма
      const gridKeys = getGridKeysInRadius(
        organism.x,
        organism.y,
        maxRadius,
        props.value.width,
        props.value.height
      );
      
      for (const key of gridKeys) {
        const cellOrganisms = collisionGrid.get(key) || [];
        for (const other of cellOrganisms) {
          if (other === organism || organismsToRemoveThisIteration.has(other)) continue;
          
          // Создаем уникальный ключ для пары, чтобы не проверять дважды
          const pairKey = organism.id < other.id 
            ? `${organism.id},${other.id}` 
            : `${other.id},${organism.id}`;
          if (processedPairs.has(pairKey)) continue;
          processedPairs.add(pairKey);

          // Хищник может съесть травоядное
          if (organism.type === "predator" && other.type === "herbivore") {
            const dx = other.x - organism.x;
            const dy = other.y - organism.y;
            // Учитываем бесшовные границы при вычислении расстояния
            let wrapDx = dx;
            let wrapDy = dy;
            if (Math.abs(wrapDx) > props.value.width / 2) {
              wrapDx = wrapDx > 0 ? wrapDx - props.value.width : wrapDx + props.value.width;
            }
            if (Math.abs(wrapDy) > props.value.height / 2) {
              wrapDy = wrapDy > 0 ? wrapDy - props.value.height : wrapDy + props.value.height;
            }
            const distSquared = wrapDx * wrapDx + wrapDy * wrapDy;
            const minDist = organism.radius + other.radius;

            if (distSquared < minDist * minDist) {
              // Хищник съедает травоядное - получает массу и энергию
              const massGain = other.mass * 0.05; // получает 5% массы травоядного (на порядок меньше)
              organism.mass += massGain;
              organism.radius = organism.mass * 3; // обновляем радиус
              const maxEnergy = organism.mass * 100; // максимум 100% от массы
              organism.energy = Math.min(organism.energy + other.mass * 100, maxEnergy); // ограничиваем до 100%
              organismsToRemoveThisIteration.add(other);
              dead.value += 1;
            }
          } else if (organism.type === "herbivore" && other.type === "predator") {
            const dx = other.x - organism.x;
            const dy = other.y - organism.y;
            // Учитываем бесшовные границы при вычислении расстояния
            let wrapDx = dx;
            let wrapDy = dy;
            if (Math.abs(wrapDx) > props.value.width / 2) {
              wrapDx = wrapDx > 0 ? wrapDx - props.value.width : wrapDx + props.value.width;
            }
            if (Math.abs(wrapDy) > props.value.height / 2) {
              wrapDy = wrapDy > 0 ? wrapDy - props.value.height : wrapDy + props.value.height;
            }
            const distSquared = wrapDx * wrapDx + wrapDy * wrapDy;
            const minDist = organism.radius + other.radius;

            if (distSquared < minDist * minDist) {
              // Хищник съедает травоядное - получает массу и энергию
              const massGain = organism.mass * 0.05; // получает 5% массы травоядного (на порядок меньше)
              other.mass += massGain;
              other.radius = other.mass * 3; // обновляем радиус
              const maxEnergy = other.mass * 100; // максимум 100% от массы
              other.energy = Math.min(other.energy + organism.mass * 100, maxEnergy); // ограничиваем до 100%
              organismsToRemoveThisIteration.add(organism);
              dead.value += 1;
              break;
            }
          }
        }
      }
    }

    // Удаление мертвых организмов после итерации
    if (organismsToRemoveThisIteration.size > 0) {
      organisms.value = organisms.value.filter((o) => !organismsToRemoveThisIteration.has(o));
    }

    // Добавление новых организмов после итерации
    if (organismsToAddThisIteration.length > 0) {
      organisms.value = [...organisms.value, ...organismsToAddThisIteration];
    }
  }

  // Рендеринг всех организмов
  const finalOrganisms = organisms.value;
  for (let i = 0; i < finalOrganisms.length; i++) {
    renderOrganism(finalOrganisms[i]);
  }

  // Продолжение анимации
  animationFrameId = requestAnimationFrame(render);
};

// Генерация начальных организмов
const generateInitialOrganisms = () => {
  organisms.value = [];
  born.value = 0;
  dead.value = 0;
  divisions.value = 0;
  mutations.value = 0;
  predatorMutations.value = 0;
  herbivoreMutations.value = 0;

  // Создаем хищников
  for (let i = 0; i < props.value.predators; i++) {
    const x = Math.random() * props.value.width;
    const y = Math.random() * props.value.height;
    organisms.value.push(createOrganism("predator", x, y));
    born.value += 1;
  }

  // Создаем травоядных
  for (let i = 0; i < props.value.herbivores; i++) {
    const x = Math.random() * props.value.width;
    const y = Math.random() * props.value.height;
    organisms.value.push(createOrganism("herbivore", x, y));
    born.value += 1;
  }
};

// Перезапуск симуляции
const resetSimulation = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  generateInitialOrganisms();
  if (ctx.value) {
    lastFrameTime = performance.now();
    animationFrameId = requestAnimationFrame(render);
  }
};

onMounted(() => {
  if (canvasAI.value) {
    ctx.value = canvasAI.value.getContext("2d");
    if (ctx.value) {
      generateInitialOrganisms();
      lastFrameTime = performance.now();
      animationFrameId = requestAnimationFrame(render);
    }
  }
});

// Синхронизация размеров canvas и границ организмов
watch(
  () => [settings.value.width, settings.value.height],
  () => {
    // При изменении размеров canvas нормализуем позиции организмов для бесшовных границ
    if (ctx.value) {
      organisms.value.forEach((organism) => {
        // Нормализуем позиции для бесшовных границ
        while (organism.x < 0) {
          organism.x += settings.value.width;
        }
        while (organism.x >= settings.value.width) {
          organism.x -= settings.value.width;
        }
        
        while (organism.y < 0) {
          organism.y += settings.value.height;
        }
        while (organism.y >= settings.value.height) {
          organism.y -= settings.value.height;
        }
      });
    }
  }
);

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style lang="scss" scoped>
input[type="number"] {
  padding: 6px 8px;
  border: 1px solid var(--color-gray--1);
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-blue-5);
    box-shadow: 0 0 0 2px var(--color-blue-0-5);
  }
}

label {
  font-size: 12px;
  color: var(--color-gray-4);
  font-weight: 500;
}

h3 {
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--color-gray-8);
}

h4 {
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--color-gray-6);
  font-weight: 600;
}

button {
  background: var(--color-blue-5);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: var(--color-blue-4);
  }

  &:active {
    background: var(--color-blue-6);
  }
}

select {
  font-family: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--color-blue-5);
    box-shadow: 0 0 0 2px var(--color-blue-0-5);
  }
}

table {
  th {
    font-weight: 600;
    font-size: 11px;
  }

  td {
    font-size: 11px;
  }
}
</style>

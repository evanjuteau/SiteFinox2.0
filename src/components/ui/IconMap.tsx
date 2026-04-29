import {
  HomeIcon,
  BuildingIcon,
  FamilyIcon,
  SunsetIcon,
  TargetIcon,
  CoinsIcon,
  HandshakeIcon,
  BankIcon,
  ShieldIcon,
  ScaleIcon,
  KeyIcon,
  DocumentIcon,
  ColumnsIcon,
  ChartIcon,
  RefreshIcon,
  HeartIcon,
  BabyIcon,
  ScrollIcon,
  TrendUpIcon,
  CalculatorIcon,
  CalendarIcon,
  GemIcon,
} from "@/components/ui/Icon";
import type { IconKey } from "@/lib/projects";

const map = {
  home: HomeIcon,
  building: BuildingIcon,
  family: FamilyIcon,
  sunset: SunsetIcon,
  target: TargetIcon,
  coins: CoinsIcon,
  handshake: HandshakeIcon,
  bank: BankIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  key: KeyIcon,
  document: DocumentIcon,
  columns: ColumnsIcon,
  chart: ChartIcon,
  refresh: RefreshIcon,
  heart: HeartIcon,
  baby: BabyIcon,
  scroll: ScrollIcon,
  trendUp: TrendUpIcon,
  calculator: CalculatorIcon,
  calendar: CalendarIcon,
  gem: GemIcon,
} as const;

export function ProjectIcon({ name, size = 24, className }: { name: IconKey; size?: number; className?: string }) {
  const Component = map[name];
  if (!Component) return null;
  return <Component size={size} className={className} />;
}

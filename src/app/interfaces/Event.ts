export default interface Event {
  id: string;
  summary: string;
  start: { date: number };
  end: { date: number };
}

export default class StringManipulation {
  public static ucfirst(toucfirst: string): string {
    return toucfirst[0].toUpperCase() + toucfirst.substring(1);
  }
}

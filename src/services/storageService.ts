const storageService = {
  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get<T>(key: string): T | null {
    const data: any = localStorage.getItem(key);

    if (!data) return null;

    let obj: T | null;

    try {
      obj = JSON.parse(data) as T;
    } catch (error) {
      obj = null;
    }

    return obj;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },

  findById<T extends { id: number }>(finding: T[], id: number): T | undefined {
    const res = finding.find((item: T) => item.id === id);
    return res;
  },

  filterById<T extends { id: number }>(filtering: T[], id: number): T[] {
    const res = filtering.filter((item: T) => item.id !== id);
    return res;
  },
};

export default storageService;

class FlyerType {
  id: number;
  name: string;

  static fromJson(json: any): FlyerType {
    var ft = new FlyerType();
    ft.id = json['id'];
    ft.name = json['name'];
    return ft;
  }

  toJson(): any {
    return {};
  }
}

export default FlyerType
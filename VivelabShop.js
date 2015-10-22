var Item = require('./Item');

var VivelabShop={
  items:[],
  itemsType:{
    dexterity: "+5 Dexterity Vest",
    agedBrie: "Aged Brie",
    elixir: "Elixir of the Mongoose",
    sulfuras: "Sulfuras, Hand of Ragnaros",
    backstage: "Backstage passes to a TAFKAL80ETC concert",
    conjured: "Conjured Mana Cake",
  },
  addItem: function(type, sellIn, quality){
    this.items.push(new Item(type, sellIn, quality));
  },
  decreaseQuality: function(item){
    if(item.quality > 0){
      item.quality --;
      if(item.sell_in <= 0 && item.quality > 0)
        item.quality --;
    }
  },
  increaseQuality: function(item){
    if(item.quality < 50)
      item.quality ++;
  },
  decreaseSellIn: function (item) {
    item.sell_in--;
  },
  canUpdate: function (item) {
    return item.name != this.itemsType.sulfuras;
  },
  canDecreaseQuality: function (item) {
    return item.name != this.itemsType.agedBrie && item.name != this.itemsType.backstage ;
  },
  shouldDoUpdateForBackstage: function(item){
    return item.name == this.itemsType.backstage;
  },
  shouldDoubleTheDecrease: function(item){
    return item.name == this.itemsType.conjured;
  },
  updateQualityForBackstage: function (item) {
    this.increaseQuality(item);
    if (item.sell_in < 11)
      this.increaseQuality(item);
    if (item.sell_in < 6)
      this.increaseQuality(item);
    if (item.sell_in <= 0)
      item.quality = 0;
  },
  updateQuality: function (item) {
    if(this.canDecreaseQuality(item)){
      this.decreaseQuality(item);
      if(this.shouldDoubleTheDecrease(item))
        this.decreaseQuality(item);
    }else {
      if(this.shouldDoUpdateForBackstage(item))
        this.updateQualityForBackstage(item);
      else
        this.increaseQuality(item);
    }
  },
  updateQualityItem: function (item){
    if(this.canUpdate(item)){
      this.updateQuality(item);
      this.decreaseSellIn(item);
    }
  },
  updateInventory: function (){
    for (var index = 0; index < this.items.length; index++) {
      this.updateQualityItem(this.items[index]);
    }
  }
}

module.exports = VivelabShop

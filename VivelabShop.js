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
      if(item.sell_in <= 0)
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
  canUpdateQuality: function (item) {
    return item.name != this.itemsType.sulfuras;
  },
  canDecreaseQuality: function (item) {
    return item.name != this.itemsType.agedBrie && item.name != this.itemsType.backstage ;
  },
  updateQualityItem: function (item){
    if(this.canUpdateQuality(item)){
      if(this.canDecreaseQuality(item)){
        this.decreaseQuality(item);
      }else {
        this.increaseQuality(item);
      }
      this.decreaseSellIn(item);
    }
  },
  updateQuality: function () {
    var items = this.items;
    for (var i = 0; i < items.length; i++) {
      if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].quality = items[i].quality - 1
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
          }
        }
      }
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        items[i].sell_in = items[i].sell_in - 1;
      }
      if (items[i].sell_in < 0) {
        if (items[i].name != 'Aged Brie') {
          if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
              if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                items[i].quality = items[i].quality - 1
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
        }
      }
    }
  }
}

module.exports = VivelabShop

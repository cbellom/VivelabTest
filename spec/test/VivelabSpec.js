'use strict';
describe("Vivelab", function() {
  var VivelabShop = require('../../VivelabShop');
  var Item = require('../../Item');

  function addDummyInventary(type){
    VivelabShop.items = [];
    VivelabShop.addItem(type, 0, 0);
  }

  function createItemWith(type, sellIn, quality){
    return new Item(type, sellIn, quality)
  }

  it("should be able to have items", function() {
    expect(VivelabShop.items).toBeDefined();
  });

  it("should be able to have items types", function() {
    expect(VivelabShop.itemsType).toBeDefined();
  });

  it("should be able to create items of type Aged Brie", function() {
    addDummyInventary(VivelabShop.itemsType.agedBrie);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.agedBrie);
  });

  it("should be able to create items of type +5 Dexterity Vest", function() {
    addDummyInventary(VivelabShop.itemsType.dexterity);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.dexterity);
  });

  it("should be able to create items of type Elixir of the Mongoose", function() {
    addDummyInventary(VivelabShop.itemsType.elixir);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.elixir);
  });

  it("should be able to create items of type Backstage passes to a TAFKAL80ETC concert", function() {
    addDummyInventary(VivelabShop.itemsType.backstage);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.backstage);
  });

  it("should be able to create items of type Sulfuras, Hand of Ragnaros", function() {
    addDummyInventary(VivelabShop.itemsType.sulfuras);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.sulfuras);
  });

  it("should be able to create items of type Conjured Mana Cake", function() {
    addDummyInventary(VivelabShop.itemsType.conjured);
    expect(VivelabShop.items.length).toBe(1);
    expect(VivelabShop.items[0].name).toBe(VivelabShop.itemsType.conjured);
  });

  it("should be able to decrease quality of item", function() {
    var item = createItemWith("any type", 10, 10);
    VivelabShop.decreaseQuality(item);
    expect(item.quality).toBe(9);
  });

  it("cant be able to decrease quality less than 0", function() {
    var item = createItemWith("any type", 10, 0);
    VivelabShop.decreaseQuality(item);
    expect(item.quality).toBe(0);
  });

  it("should be able to increase quality of item", function() {
    var item = createItemWith("any type", 10, 10);
    VivelabShop.increaseQuality(item);
    expect(item.quality).toBe(11);
  });

  it("cant be able to increase quality more than 50 ", function() {
    var item = createItemWith("any type", 10, 50);
    VivelabShop.increaseQuality(item);
    expect(item.quality).toBe(50);
  });

  it("should be able to decrease sell in of item", function() {
    var item = createItemWith("any type", 10, 10);
    VivelabShop.decreaseSellIn(item);
    expect(item.sell_in).toBe(9);
  });

  it("should update quality for +5 Dexterity Vest item", function(){
    var item = createItemWith(VivelabShop.itemsType.dexterity, 10, 10);
    VivelabShop.updateQualityItem(item);
    expect(item.sell_in).toBe(9);
    expect(item.quality).toBe(9);
  });

  it("should update quality for +5 Dexterity Vest item with a sell in expired", function(){
    var item = createItemWith(VivelabShop.itemsType.dexterity, 0, 10);
    VivelabShop.updateQualityItem(item);
    expect(item.sell_in).toBe(-1);
    expect(item.quality).toBe(8);
  });

  it("should update quality for Aged Brie item", function(){
    var item = createItemWith(VivelabShop.itemsType.agedBrie, 10, 10);
    VivelabShop.updateQualityItem(item);
    expect(item.sell_in).toBe(9);
    expect(item.quality).toBe(11);
  });

  it("shouldnt update quality for sulfuras item", function(){
    var item = createItemWith(VivelabShop.itemsType.sulfuras, 0, 80);
    VivelabShop.updateQualityItem(item);
    expect(item.sell_in).toBe(0);
    expect(item.quality).toBe(80);
  });

  it("should update quality for backstage item with more that 10 days for sell", function(){
    var item = createItemWith(VivelabShop.itemsType.backstage, 11, 10);
    VivelabShop.updateQualityItem(item);
    expect(item.sell_in).toBe(10);
    expect(item.quality).toBe(11);
  });
});

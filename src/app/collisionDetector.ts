import { Tree } from './objects/tree';
import { Character } from './objects/character';
import { GameAreaComponent } from './game-area/game-area.component';


export class collisionDetector {

  private crashed:boolean = false;

  public static detect( tree: Tree, char: Character) {
    if (char.y == char.d && tree.x < (char.x + char.characterBodyWidth) && (char.x + char.characterBodyWidth) < (tree.x + tree.topWidth)) {
      GameAreaComponent.setScore(0);
      GameAreaComponent.setLives(GameAreaComponent.lives-1);
    }
    else if ((char.y + char.characterBodyHeight+char.characterLegHeight - 16) < tree.y + tree.topHeight && char.y + char.characterBodyHeight+char.characterLegHeight - 16 > tree.y) {
      var i;
      for (i = 0; i <= tree.topHeight; i = i + char.speed) {
        if (tree.x + (tree.slope * i) + 3 < (char.x + char.characterBodyWidth) && (char.x + char.characterBodyWidth) < (tree.x + tree.topWidth - (tree.slope * i)) && tree.y + tree.topHeight - i == char.y + char.characterBodyHeight+char.characterLegHeight) {
          GameAreaComponent.setScore(0);
          GameAreaComponent.setLives(GameAreaComponent.lives-1);
        }
      }
    }
  }

}
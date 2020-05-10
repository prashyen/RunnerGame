import { Tree } from './objects/tree';
import { Character } from './objects/character';
import { GameAreaComponent } from './game-area/game-area.component';


export class collisionDetector {

  static prevprevCrashed: boolean = false;
  static prevCrashed: boolean = false;
  static crashed: boolean = false;
  static gameOver: boolean = false;
  static count:number=1;
  static crashcount:number=0;

  public static detect( tree: Tree, char: Character): boolean{
    collisionDetector.crashed=false;
    if (char.y == char.d && tree.x < (char.x + char.characterBodyWidth) && (char.x + char.characterBodyWidth) < (tree.x + tree.topWidth)) {
     // GameAreaComponent.setScore(0);
      collisionDetector.crashed=true;
      collisionDetector.gameOver=true;
    }
    else if ((char.y + char.characterBodyHeight+char.characterLegHeight - 16) < tree.y + tree.topHeight && char.y + char.characterBodyHeight+char.characterLegHeight - 16 > tree.y) {
      var i;
      for (i = 0; i <= tree.topHeight; i = i + Character.speed) {
        if (tree.x + (tree.slope * i) + 3 < (char.x + char.characterBodyWidth) && (char.x + char.characterBodyWidth) < (tree.x + tree.topWidth - (tree.slope * i)) && tree.y + tree.topHeight - i == char.y + char.characterBodyHeight+char.characterLegHeight) {
          //GameAreaComponent.setScore(0);
          collisionDetector.crashed=true;
          collisionDetector.gameOver=true
          break;
        }
      }
    }
    if(collisionDetector.crashed==false){
      collisionDetector.count = collisionDetector.count +1;
    }else{
      collisionDetector.count = 0;
      collisionDetector.crashcount = collisionDetector.crashcount +1;
    }
    if(collisionDetector.crashcount==8){
      GameAreaComponent.setLives(GameAreaComponent.lives-1);
      collisionDetector.crashcount =0;
    }
    collisionDetector.prevCrashed=collisionDetector.crashed;
    
  return collisionDetector.gameOver;
  }
}
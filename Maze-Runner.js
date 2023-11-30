// Description 
// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

function mazeRunner(maze, directions) {
    let length = maze.length
    let positions = []
    let positionY =0, positionX=0
    let res= 'Lost'
    for (let y=0; y<length; y++){
      if (maze[y].includes(2)){
        positionY = y
        positionX = maze[y].indexOf(2)
        break
      }
    }
    directions.map(dir=> {
      if (dir=='N'){
        positionY-=1
      }else if (dir=='S'){
        positionY+=1
      }else if (dir=='W'){
        positionX-=1
      }else if (dir=='E'){
        positionX+=1
      }  
      if (positionY>=0 && positionY<length && positionX>=0 && positionX<length){
          let p= maze[positionY][positionX]
          positions.push(p)
      } else {
        positions.push('Dead')
      }
    })
    for (let i=0; i<positions.length; i++){
      if (positions[i]==3){
        res ='Finish'
        break
      } else if (positions[i]==1 || positions[i]=='Dead'){
        res = 'Dead'
        break
      } 
    }
    return res
}
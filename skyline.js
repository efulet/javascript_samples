/**
 * The Skyline Problem. The problem statement is located at http://www.algorithmist.com/index.php/UVa_105
 * 
 * This is the Javascript version of the Skyline problem resolved by Tushar online at  
 * https://www.youtube.com/watch?v=GSBLe8cKu0s
 * 
 * @author Exequiel Fuentes
 */
let skyline = (buildings) => {
    let points = [];
    
    buildings.forEach((b) => {
        points.push([b[0], b[2], true]);
        points.push([b[1], b[2], false]);
    });
    
    let results = [], queue = {}, prev_max_height = 0;
    queue[0] = 1;
    
    points.sort((p1, p2) => {
        if(p1[0] != p2[0]) {
            return p1[0] - p2[0];
        } else {
            return (p1[2] ? -p1[1] : p1[1]) - (p2[2] ? -p2[1] : p2[1]);
        }
    }).forEach((p) => {
        if(p[2]) {
            queue[p[1]] = queue[p[1]] ? ++queue[p[1]] : 1;
        } else {
            if(queue[p[1]] == 1) delete queue[p[1]];
            else queue[p[1]] -= 1;
        }
        
        let current_max_height = Math.max(...Object.keys(queue));
        
        if(prev_max_height != current_max_height) {
            //results.push([p[0], prev_max_height]); // for including all points
            results.push([p[0], current_max_height]);
            prev_max_height = current_max_height;
        }
    });
    
    return results;
};

// Building format: [left, right, height]
console.log(skyline([[1, 5, 11], [2, 7, 6], [3, 9, 13], [12, 16, 7], [14, 25, 3], [19, 22, 18], [23, 29, 13], [24, 28, 4]]));


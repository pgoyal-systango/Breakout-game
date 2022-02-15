const csv = document.getElementById("breakout");
const ctx = csv.getContext("2d");

csv.style.border = "1px solid black";

const paddle_width = 100;
const paddle_margin_bottom = 50;
const paddle_height = 20;
const ball_radius = 8;
let life = 3;
let score = 0;
const score_unit = 10;
let Level = -1;
const max_level = 3;
let game_over = false;
let leftArrow = false;
let rightArrow = false;

// Create bricks

const brick = {
    row: 2,
    colummn: 7,
    width : 75,
    height : 20,
    offsetleft : 34,
    offsettop : 20,
    margingtop : 30,
    fillcolor : "#2e3548",
    strokeColor : "#FFF"
}
let bricks = [];
function createBricks()
{
    for(let r=0;r<brick.row;r++)
    {
         bricks[r]=[];
         for(let c=0;c<brick.colummn;c++)
         {
             bricks[r][c]= {
                 x: c*(brick.offsetleft + brick.width)+brick.offsetleft,
                y : r*(brick.offsettop+ brick.height)+ brick.offsettop + brick.margingtop,
                status : true
             }
         }
    }
}
createBricks();
function drawBricks()
{
    for(let r = 0;r<brick.row ; r++)
    {
        for(let c=0; c<brick.colummn;c++)
        {
            let b = bricks[r][c];
            if(b.status)
            {
                ctx.fillStyle= brick.fillcolor;
                ctx.fillRect(b.x,b.y,brick.width,brick.height);

                ctx.strokeStyle
            }
        }
    }
}
drawBricks();
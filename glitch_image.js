let glitch_father = document.getElementById("about") //the main glith element father
let img_to_glitch = document.getElementById("photo") //the glitch element
let glitchs = []
let count = 3 //for better color distribution use 'evens numbers'
let animation_type = "row" //row, free and column
let animation_speed = 100 //in miliseconds
for(let i = 0; i < count; i++)
{
    let new_glitch_box = document.createElement("glitch_box_" + (i + 1))
    new_glitch_box.className = "box_1 box"
    glitch_father.appendChild(new_glitch_box)
    glitchs.push(new_glitch_box)
}

setInterval(function(){
    if(window.screen.availWidth >= 510)
    {
        if(img_to_glitch.style.visibility != "visible")
        {
            img_to_glitch.style.visibility = "visible";
            img_to_glitch.style.width = img_to_glitch.naturalWidth + "px"
            img_to_glitch.style.height = img_to_glitch.naturalHeight + "px"
        }
        let diff_1 = img_to_glitch.getBoundingClientRect().top + img_to_glitch.getBoundingClientRect().height
        if(diff_1 > 0)
        {
            let img_to_glitch_rect = img_to_glitch.getBoundingClientRect()
            let img_to_glitch_x = img_to_glitch_rect.left
            let img_to_glitch_y = img_to_glitch_rect.top
            let img_to_glitch_height = img_to_glitch_rect.height
            let img_to_glitch_width = img_to_glitch_rect.width
            let all_glitchs = document.getElementsByClassName("box")
            let min_height = 5
            let max_height = 15
            let min_width = 40
            let max_width = 200
            let column_pos_oscilation = 3
            let line_pos_oscilation = 3
            for(let i = 0; i < all_glitchs.length; i++)
            {
                if(animation_type == "row")
                {
                    let rand_height = Math.floor(Math.random()*max_height)
                    if(rand_height < min_height)
                    {
                        rand_height = min_height
                    }
                    rand_top = Math.floor(Math.random()*img_to_glitch_height) + img_to_glitch_y + window.pageYOffset
                    all_glitchs[i].style.left = img_to_glitch_x + "px"
                    all_glitchs[i].style.top = rand_top + "px"
                    all_glitchs[i].style.width = img_to_glitch_width + "px"
                    all_glitchs[i].style.height = rand_height + "px"
                    all_glitchs[i].style.backgroundPositionX = img_to_glitch_x + returnPositiveOrNegative()*column_pos_oscilation + "px"
                    all_glitchs[i].style.backgroundPositionY = img_to_glitch_y + returnPositiveOrNegative()*line_pos_oscilation + "px"
                }
                else if(animation_type == "column")
                {
                    let rand_width = Math.floor(Math.random()*max_width)
                    if(rand_width < min_width)
                    {
                        rand_width = min_width
                    }
                    //falta código aqui
                }
                else if(animation_type == "free")
                {
                    let rand_height = Math.floor(Math.random()*max_height)
                    if(rand_height < min_height)
                    {
                        rand_height = min_height
                    }
                    let rand_width = Math.floor(Math.random()*max_width)
                    if(rand_width < min_width)
                    {
                        rand_width = min_width
                    }
                    rand_left = Math.floor(Math.random()*(img_to_glitch_width - rand_width)) + img_to_glitch_x
                    rand_top = Math.floor(Math.random()*(img_to_glitch_height - rand_height)) + img_to_glitch_y + window.pageYOffset
                    all_glitchs[i].style.left = rand_left + "px"
                    all_glitchs[i].style.top = rand_top + "px"
                    all_glitchs[i].style.width = rand_width + "px"
                    all_glitchs[i].style.height = rand_height + "px"
                    all_glitchs[i].style.backgroundPositionX = img_to_glitch_x + returnPositiveOrNegative()*column_pos_oscilation + "px"
                    all_glitchs[i].style.backgroundPositionY = img_to_glitch_y + returnPositiveOrNegative()*line_pos_oscilation + "px"
                }
                else{
                    console.log("glitch animation type does not exist!")
                }
            }
        }
    }
    else
    {
        if(img_to_glitch.style.visibility != "hidden")
        {
            img_to_glitch.style.visibility = "hidden"
            img_to_glitch.style.width = "0px"
            img_to_glitch.style.height = "0px"
            // img_to_glitch.style.gridRow = "1"
            for(let i = 0; i < glitchs.length;i++)
            {
                glitchs[i].style = ""
                glitchs[i].width = "0px"
                glitchs[i].height = "0px"
            }
        }
    }
}, animation_speed)

function returnPositiveOrNegative()
{
    let rand = Math.random()
    if(rand <= 0.5)
    {
        return 1
    }
    else
    {
        return -1
    }
}
<template>
    <div>
        <svg :width='width' :height='height' @mousemove='listener($event)'>
            <a v-for = 'tag in allTags' href = 'tag.href'>
                <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
            </a>
        </svg>
    </div>
</template>
<script>
export default{
    props:[tags,width,height,r],
            data() {
                return {
                    tagsNum:20,
                    speedX:Math.PI/360,
                    speedY:Math.PI/360,
                    tags: []
                }
            },
            computed:{
                CX(){
                    return this.width/2;
                },
                CY(){
                    return this.height/2;
                }
            },
            created(){
                let tags=[];
                console.log(this.tagsNum)
                for(let i=0;i<this.tagsNum;i++){
                    let tag={};
                    let k = -1+(2*(i+1)-1)/this.tagsNum;
                    let a = Math.acos(k);
                    let b = a*Math.sqrt(this.tagsNum*Math.PI)
                    tag.text = i + 'tag';
                    tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
                    tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
                    tag.z = this.RADIUS * Math.cos(a);
                    tag.href = 'https://imgss.github.io'
                    tags.push(tag)
                }
                this.tags = tags;
            },
            mounted(){
                setInterval(()=>{
                    this.rotateX(this.speedX);
                    this.rotateY(this.speedY);
                },17)
            },
            methods:{
                rotateX(angleX){
                        var cos = Math.cos(angleX);
                        var sin = Math.sin(angleX);
                        for(let tag of this.tags){
                            var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                            var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                            tag.y = y1;
                            tag.z = z1;
                        } 
                },
                rotateY(angleY){
                        var cos = Math.cos(angleY);
                        var sin = Math.sin(angleY);
                        for(let tag of this.tags){
                            var x1 = (tag.x-this.CX) * cos - tag.z * sin + this.CX;
				            var z1 = tag.z * cos + (tag.x-this.CX) * sin;
                            tag.x = x1;
                            tag.z = z1;
                        } 
                    },
                listener(event){
                    var x = event.clientX - this.CX;
                    var y = event.clientY - this.CY;
                    this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002,x*0.0001) : Math.max(-this.RADIUS*0.00002,x*0.0001);
                    this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002,y*0.0001) : Math.max(-this.RADIUS*0.00002,y*0.0001); 
                }
                }
            }
}
</script>

<style>

</style>
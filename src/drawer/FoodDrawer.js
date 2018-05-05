import React from "react"
import {Card, Drawer, ListItem} from "material-ui"
import firebase from "firebase/index";

const FoodCard = props => {
    const {style,cardStyle} = props
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",...style}}>
            <Card
                style={{
                    boxShadow:"0 0 0 0",
                    width:"98%",
                    height:"95%",
                    minWidth:300,
                    padding:10,
                    ...cardStyle
                }}
            >
                <span style={{letterSpacing:1}}>Gami</span>
                <img width={"100%"} src="https://www.gamichicken.com.au/images/main/gami003.jpg" alt=""/>
            </Card>
        </div>
    )
}

class FoodDrawer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            company2eats:{},
            foodItems:[],
            ranking:[]
        }
        const facebook = firebase.database().ref('facebook_data/eat');
        const zomato = firebase.database().ref('zomato_data');
        const p1 = new Promise(res=>facebook.on('value', snapshot => {
            res(snapshot.val())
        }));
        const p2 = new Promise(res => zomato.on('value', snapshot => {
            res(snapshot.val())
        }));
        Promise.all([p1,p2]).then(res=>{
            const [x,y] = res;
            this.setState({ foodItems: [...x,...y] },()=>console.log(this.state.foodItems));


        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        const {open,style} = this.props
        return(
            <Drawer open={open} width={"100%"} containerStyle={{padding:70, boxShadow: undefined, ...style}}>
                <div style={{background:"rgba(255,255,255,0.8)",width:"100%",height:"100%",padding:20}}>
                    <span style={{letterSpacing:1}}>SELECT FLIGHTS</span>
                    <div style={{height:15}}/>
                    <div style={{display:"flex",height: "95%",}}>
                        <div
                            style={{
                                display:"flex",
                                flexWrap:"wrap",
                                overflowY:"scroll",
                                height: "100%",
                            }}
                        >
                            {new Array(100).fill().map(x=><FoodCard style={{flex:1}}/>)}
                            <span style={{flex:1,minWidth:300,}}/>
                        </div>
                        <div style={{minWidth:200,background:"rgba(255,255,255,0.8)",padding:10,height:"100%",overflowY:"scroll"}}>
                            <span style={{letterSpacing:2,color:"#777777"}}>Ranking</span>
                            {new Array(10).fill().map((v,i)=><ListItem innerDivStyle={{fontSize:10}}>#{i+1} Gami Dinner</ListItem>)}
                        </div>
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default FoodDrawer
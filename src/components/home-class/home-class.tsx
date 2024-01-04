import React, { FC } from 'react';
import './home-class.css';
import { withRouter } from 'react-router-guard';
interface HomeClassProps {}
interface HomeClassState{}

class HomeClass extends React.Component<HomeClassProps,HomeClassState>{

  constructor(props: HomeClassProps | Readonly<HomeClassProps>){
    super(props)
  }
   handleclick=()=>{

  }
}

// const HomeClass: FC<HomeClassProps> = () => (
//   <div className="home-class" data-testid="HomeClass">
//     HomeClass Component
//   </div>
// );

export default HomeClass;



import React from 'react';

const CategoryList = ({products,categoryclick}) => {
	return(
		
		<ul className="list catList ph3 ph5-ns pv4-ns dib">
		{
		products.map((item,i)=>{
			if(item.category.length>1){
				item.category.forEach((cat,ind)=>{
					return (<li className="white dib mr2 f6 f5-ns b--solid" key={ind} value = {`${cat}`} onClick={categoryclick}>
							{`${cat},`}
							</li>
					);
				})
			}
			else{
				return (<li className="white dib mr2 f6 f5-ns b" key={i} value = {`${item.category[0]}`} onClick={categoryclick}>
						{`${item.category[0]},`}
						</li>
				)
			}
		})
		}
  		</ul>
	);
}
export default CategoryList;
// const singleProduct = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120,
//     }
//   }
 
//   const keys  = Object.keys(singleProduct)
  console.log(keys)

//   const values = Object.values(singleProduct)
//   console.log(keys)

//   console.log(singleProduct)
  //how we can iterate Object
//   for (key in singleProduct){
//     console.log(key, ":" , singleProduct[key])
//   }
// const ratingValues = Object.values(singleProduct.rating)

// const sum =  ratingValues.reduce((val,acc) =>{
//     return val + acc;
// },0)

//Second example

// const products = [
//     {
//       "id": 1,
//       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       "price": 109.95,
//       "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       "rating": {
//         "rate": 3.9,
//         "count": 120
//       }
//     },
//     {
//       "id": 2,
//       "title": "Mens Casual Premium Slim Fit T-Shirts ",
//       "price": 22.3,
//       "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       "rating": {
//         "rate": 4.1,
//         "count": 259
//       }
//     },
//     {
//       "id": 3,
//       "title": "Mens Cotton Jacket",
//       "price": 55.99,
//       "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       "rating": {
//         "rate": 4.7,
//         "count": 500
//       }
//     },
//     {
//       "id": 4,
//       "title": "Mens Casual Slim Fit",
//       "price": 15.99,
//       "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       "rating": {
//         "rate": 2.1,
//         "count": 430
//       }
//     }
//   ]

//   products.forEach((val)=>{
//     console.log(val.price)
//   })

// const rate = products.map((val) =>{
//     return val.rating.rate
// })

// const rateSum = rate.reduce((val, acc)=>{
//     return val + acc;
// },0)



// const rate = products.map((val) =>{
//     return val.rating.rate
// }).reduce((val, acc)=>{
//     return val + acc;
// },0)


//example 3

const recipe = {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8e09994ae05c0efd9a8c77006e5ad363",
    "label": "Yaki Onigiri Recipe",
    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f7b/f7be5e0ab2cfb0aec620babf91d251e9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDAg33cbzvUILoDaLD%2FXqCMp5mfju0%2BAudLAAgZ4RocXQIgETVgo0V8NBrzrHOdo2KuRsTylp%2BGDwxBVZANwKZgUL4qwQUIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDBl0JnYBAax62tKj6SqVBQ%2FfpSTa3BJlfpDjYn3StRLGS69kqudkUTki4KgKuUorCqpshohm0k2kP6D6pd%2B6egaOEH0zwoMlvaCjy57IHcvoomfP%2BnrSCjuTuEqCKIn6%2F9Ffz0jw%2BueU76WJ%2BzjgX99siSTtJF8GYNkwaAjY0Xs89Knsm7BEdAJN13ZiBCc6c2QnWWAA30nTwqzJfxGlwL9rSsxJAAagJzWs3tiHgkqRoPB7rlegb36WnhMwndLVMiqx8uNKgUc1zATHVPmKv9rgR41lMm%2FobAEP71yGWmKRI9SQj094LyejsnmWIgzRgykilXGM7CVKNn0JdxiLOEgI4MQtMOu%2Fw%2FI7RxjdcossXXLH%2Br9dyBN%2FPHQpYAEauDu7iE%2FgwSm6%2BumshMnwe4%2BX3ulX9xZ4MrSmvhAbPwlE28IyBbRLKz74tvkmUiwbJR0NAhJx9j5Ec0kTuwYuHOVNlwFgzTfY1L39ZOJB0HT1LyMpirzO6XVU9mJt482yb3rNtzJfHF4bde85GoYzeJ%2F7eWyn5J52g5VqJlsqp8zjlZHMVO2tHqkJRtQhvksuwfax7Cf2F0IM2hgHTSSTR5P9BSd3ie6a2%2BygNc1QLKcxPhx6rtLYXxNHk8r1BM8Caf%2FHxet%2Bq%2BIVuDkq29UpR%2Bt4q%2FsWlmYFIIK8h1F4C1izSkODFiDZYfJNczuSIxcuqYYwwDa%2F2f90lD0gIl4MFaVwQm3aN6kzzQeRtb94UCU28FhnSvyFNM1wEf2d7T3CEdOKw%2B8Ze8SHnS48F1kRrSlodasvWwZSewg8WyMOByLv4F%2FoW90Y1oaODOavjsLoDgs9gI7qvvtZvf3ja7Wlhnmj53ZzHp0E9ft%2BANb05z3gh03B7scdioBGsIc5VxYU504SUNYw9vT8nwY6sQETndGWWzGxFafj9u5%2F3tpaw%2Fd713oZPGrW1Mu1IOKFp6UZxzfqg0ZsE7%2BVw4KaVdiSvDFo8u6UvWyMBR4b4k9sGZTHrof3L0iqGJS2hNR7mDWYJkPajyWCyUIIMia11yF3oNd%2BjL6BqTU7tviX9mUYko4Exwz%2FLHf3yeneI8DlYPxdXlbX00QBfrQY5zYCX8xzJs4eX6OUL1YaWOdldUVPpij1WgUdMKOsZNS1qlyKSgk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T122822Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFALEH2CFW%2F20230301%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e7b46be735e190db6961cf5126821509a39170bce0f7c2ad5617bddecaf5f8e3",
    "source": "Serious Eats",
    "url": "http://www.seriouseats.com/recipes/2011/08/yaki-onigiri-grilled-rice-asian-recipe.html",
    "shareAs": "http://www.edamam.com/recipe/yaki-onigiri-recipe-8e09994ae05c0efd9a8c77006e5ad363/-/591-722-cal",
    "yield": 4,
    "dietLabels": [
        "Low-Fat"
    ],
    "healthLabels": [
        "Sugar-Conscious",
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Dairy-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Kosher"
    ],
    "cautions": [],
    "ingredientLines": [
        "3 cups cooked short-grain white rice, or 2 cups white rice and 1 cup brown rice",
        "1/4 cup soy sauce for glazing"
    ],
    "ingredients": [
        {
            "text": "3 cups cooked short-grain white rice, or 2 cups white rice and 1 cup brown rice",
            "quantity": 3,
            "measure": "cup",
            "food": "rice",
            "weight": 585,
            "foodCategory": "grains",
            "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
            "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
        },
        {
            "text": "3 cups cooked short-grain white rice, or 2 cups white rice and 1 cup brown rice",
            "quantity": 1,
            "measure": "cup",
            "food": "brown rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
        },
        {
            "text": "1/4 cup soy sauce for glazing",
            "quantity": 0.25,
            "measure": "cup",
            "food": "soy sauce",
            "weight": 63.75,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
        }
    ],
    "calories": 2827.5875,
    "totalWeight": 838.75,
    "totalTime": 20,
    "cuisineType": [
        "italian"
    ],
    "mealType": [
        "snack"
    ],
    "dishType": [
        "starter"
    ],
    "totalNutrients": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2827.5875,
            "unit": "kcal"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 8.848375,
            "unit": "g"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 1.9892375000000002,
            "unit": "g"
        },
        "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
        },
        "FAMS": {
            "label": "Monounsaturated",
            "quantity": 2.95985,
            "unit": "g"
        },
        "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.8965125,
            "unit": "g"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 612.0048750000001,
            "unit": "g"
        },
        "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 605.034875,
            "unit": "g"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 6.97,
            "unit": "g"
        },
        "SUGAR": {
            "label": "Sugars",
            "quantity": 0.25500000000000006,
            "unit": "g"
        },
        "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 58.10775000000001,
            "unit": "g"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 3515.2375,
            "unit": "mg"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 136.38750000000002,
            "unit": "mg"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 523.625,
            "unit": "mg"
        },
        "K": {
            "label": "Potassium",
            "quantity": 1289.6125000000002,
            "unit": "mg"
        },
        "FE": {
            "label": "Iron",
            "quantity": 9.024375000000001,
            "unit": "mg"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 11.178625,
            "unit": "mg"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 1239.2250000000001,
            "unit": "mg"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "µg"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.2152375000000002,
            "unit": "mg"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.46768750000000003,
            "unit": "mg"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.94515,
            "unit": "mg"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.9097,
            "unit": "mg"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 99.575,
            "unit": "µg"
        },
        "FOLFD": {
            "label": "Folate (food)",
            "quantity": 99.575,
            "unit": "µg"
        },
        "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0,
            "unit": "mg"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 0,
            "unit": "µg"
        },
        "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
        },
        "WATER": {
            "label": "Water",
            "quantity": 144.267625,
            "unit": "g"
        }
    },
    "totalDaily": {
        "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 141.379375,
            "unit": "%"
        },
        "FAT": {
            "label": "Fat",
            "quantity": 13.612884615384617,
            "unit": "%"
        },
        "FASAT": {
            "label": "Saturated",
            "quantity": 9.9461875,
            "unit": "%"
        },
        "CHOCDF": {
            "label": "Carbs",
            "quantity": 204.00162500000005,
            "unit": "%"
        },
        "FIBTG": {
            "label": "Fiber",
            "quantity": 27.88,
            "unit": "%"
        },
        "PROCNT": {
            "label": "Protein",
            "quantity": 116.21550000000003,
            "unit": "%"
        },
        "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
        },
        "NA": {
            "label": "Sodium",
            "quantity": 146.46822916666667,
            "unit": "%"
        },
        "CA": {
            "label": "Calcium",
            "quantity": 13.638750000000002,
            "unit": "%"
        },
        "MG": {
            "label": "Magnesium",
            "quantity": 124.67261904761905,
            "unit": "%"
        },
        "K": {
            "label": "Potassium",
            "quantity": 27.43856382978724,
            "unit": "%"
        },
        "FE": {
            "label": "Iron",
            "quantity": 50.13541666666667,
            "unit": "%"
        },
        "ZN": {
            "label": "Zinc",
            "quantity": 101.62386363636364,
            "unit": "%"
        },
        "P": {
            "label": "Phosphorus",
            "quantity": 177.03214285714287,
            "unit": "%"
        },
        "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "%"
        },
        "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
        },
        "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 101.26979166666669,
            "unit": "%"
        },
        "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 35.97596153846154,
            "unit": "%"
        },
        "NIA": {
            "label": "Niacin (B3)",
            "quantity": 118.4071875,
            "unit": "%"
        },
        "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 146.9,
            "unit": "%"
        },
        "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.89375,
            "unit": "%"
        },
        "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
        },
        "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
        },
        "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0,
            "unit": "%"
        },
        "VITK1": {
            "label": "Vitamin K",
            "quantity": 0,
            "unit": "%"
        }
    },
    "digest": [
        {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 8.848375,
            "hasRDI": true,
            "daily": 13.612884615384617,
            "unit": "g",
            "sub": [
                {
                    "label": "Saturated",
                    "tag": "FASAT",
                    "schemaOrgTag": "saturatedFatContent",
                    "total": 1.9892375000000002,
                    "hasRDI": true,
                    "daily": 9.9461875,
                    "unit": "g"
                },
                {
                    "label": "Trans",
                    "tag": "FATRN",
                    "schemaOrgTag": "transFatContent",
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Monounsaturated",
                    "tag": "FAMS",
                    "schemaOrgTag": null,
                    "total": 2.95985,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Polyunsaturated",
                    "tag": "FAPU",
                    "schemaOrgTag": null,
                    "total": 2.8965125,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        },
        {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 612.0048750000001,
            "hasRDI": true,
            "daily": 204.00162500000005,
            "unit": "g",
            "sub": [
                {
                    "label": "Carbs (net)",
                    "tag": "CHOCDF.net",
                    "schemaOrgTag": null,
                    "total": 605.034875,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Fiber",
                    "tag": "FIBTG",
                    "schemaOrgTag": "fiberContent",
                    "total": 6.97,
                    "hasRDI": true,
                    "daily": 27.88,
                    "unit": "g"
                },
                {
                    "label": "Sugars",
                    "tag": "SUGAR",
                    "schemaOrgTag": "sugarContent",
                    "total": 0.25500000000000006,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Sugars, added",
                    "tag": "SUGAR.added",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        },
        {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 58.10775000000001,
            "hasRDI": true,
            "daily": 116.21550000000003,
            "unit": "g"
        },
        {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
        },
        {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3515.2375,
            "hasRDI": true,
            "daily": 146.46822916666667,
            "unit": "mg"
        },
        {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 136.38750000000002,
            "hasRDI": true,
            "daily": 13.638750000000002,
            "unit": "mg"
        },
        {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 523.625,
            "hasRDI": true,
            "daily": 124.67261904761905,
            "unit": "mg"
        },
        {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1289.6125000000002,
            "hasRDI": true,
            "daily": 27.43856382978724,
            "unit": "mg"
        },
        {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 9.024375000000001,
            "hasRDI": true,
            "daily": 50.13541666666667,
            "unit": "mg"
        },
        {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 11.178625,
            "hasRDI": true,
            "daily": 101.62386363636364,
            "unit": "mg"
        },
        {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1239.2250000000001,
            "hasRDI": true,
            "daily": 177.03214285714287,
            "unit": "mg"
        },
        {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
        },
        {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.2152375000000002,
            "hasRDI": true,
            "daily": 101.26979166666669,
            "unit": "mg"
        },
        {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.46768750000000003,
            "hasRDI": true,
            "daily": 35.97596153846154,
            "unit": "mg"
        },
        {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 18.94515,
            "hasRDI": true,
            "daily": 118.4071875,
            "unit": "mg"
        },
        {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.9097,
            "hasRDI": true,
            "daily": 146.9,
            "unit": "mg"
        },
        {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 99.575,
            "hasRDI": true,
            "daily": 24.89375,
            "unit": "µg"
        },
        {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 99.575,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
        },
        {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
        },
        {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
        },
        {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 144.267625,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
        }
    ]
}

const sum = recipe.digest.map((val)=>{
    return val.total
}).filter((val) =>{
    return val>10;
})

const arr = [1,2,3,4,5,6]

// pop() => to dleete from end
// push() => to insert in end

//shift()
//unshift()  




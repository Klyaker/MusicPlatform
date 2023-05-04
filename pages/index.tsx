import RecipeReviewCard from "@/components/Card";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const Index = () => {
    return (
        <>  
            <MainLayout>
                <div className="center">
                    <h1>Welcome</h1>
                    <RecipeReviewCard/>
                    <RecipeReviewCard/>
                    <RecipeReviewCard/>
                </div>
            </MainLayout>
            
            <style jsx>
                {`
                    .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                }
                
                `}
            </style>
            
        </>
    );
};

export default Index;


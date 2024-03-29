export const source = {
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .userName {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                text-align: left;
                font-family: Noto Sans;
                font-size: 29px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 0px;
                margin-bottom: 7px;
            }
    
            .userJobTitle {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                text-align: center;
                font-family: Noto Sans;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }
    
            .userInfo {
                color: var(--foundation-grey-grey-600, #191919);
                font-family: Noto Sans;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
            }
    
            .sectionType {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 26px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-top: 0px;
            }
    
            .titleObjective {
                color: #000;
                font-family: Noto Sans;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }
    
            .text1 {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 7px 0px;
            }
    
            .text2 {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                margin: 7px 0px;
            }
    
            .text3 {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 25px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 7px 0px;
            }
    
            .text4 {
                color: var(--foundation-grey-grey-400, #494949);
                font-family: Noto Sans;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                margin: 7px 0px;
            }
    
            .gradeText {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                line-height: 22px;
            }
    
            .textExp {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 7px 0px;
            }
    
            .textSkill {
                color: var(--foundation-grey-grey-300, #676767);
                font-family: Noto Sans;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                margin: 5px 0px 5px 10px;
            }
    
            .titleSkill {
                color: var(--foundation-grey-grey-500, #1C1C1C);
                font-family: Noto Sans;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                margin: 10px 0px;
            }
        </style>
    </head>
    
    <body style="background-color: #fff;width: 100%;height: 100%;">
    
        <div style="display: grid;column-gap: 10px;">
            <!-- header profile section-->
            <div style="display:grid;padding: 10px 60px; margin: 0px;">
                <div style="display: grid;background-color: #F2F2F2;
            border-radius: 20px;
            padding: 20px 70px;
            margin: 0px;
            ">
                    <div
                        style="display: flex;flex: 1; flex-direction: row;justify-content: space-around; padding-left: 40px;">
                        <div style="display: flex; flex-direction: row;align-items: center; flex: 1;">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                style="border-radius: 50%; width: 160px; height: 160px;" />
                            <div style="display: flex;flex-direction: column;
                    margin-left: 10px;
                    ">
                                <h1 class="userName">
                                    John Doe
                                </h1>
                                <b class="userJobTitle">
                                    Senior ui ux designer at O-Project
                                </b>
                            </div>
                        </div>
    
                        <div
                            style="display: flex;flex: 1;flex-direction: column;align-items: flex-start;justify-content: center;">
                            <b class="userInfo">Nasr City ، Cairo Egypt</b>
                            <b class="userInfo">Example@info.com</b>
                            <b class="userInfo">0100 2054 6657</b>
    
                        </div>
                    </div>
                </div>
            </div>
            <!-- Objective section -->
            <div style="display:grid;padding: 10px 60px; margin: 0px;">
                <div style="display: grid;background-color: #E8EFFC;
        border-radius: 20px;
        padding: 20px 70px;
        
        ">
                    <h1 class="sectionType">Objective</h1>
                    <b class="titleObjective">
                        Highly experienced, creative, and multitalented Senior UI/UX Designer and Senior Graphic Designer
                        with
                        an extensive background in, UI & UX marketing, social media advertising, branding and print design.
                        Exceptional collaborative and interpersonal skills; very strong team player with well-developed
                        communication abilities. Experienced at producing high-end business-to-business and consumer-facing
                        designs; talented at building and maintaining partnerships. Passionate and accustomed to performing
                        in
                        deadline-driven environments.Also excels at several tech tools, including Illustrator, Photoshop,
                        InDesign. XD , Figmaand After Effect˝
                    </b>
                </div>
            </div>
            <!-- left section -->
            <div style="display: flex;width: 92%;margin-left: auto;margin-right: auto;column-gap: 10px;margin-top: 10px;">
                <div style="width: 50%;flex-direction: column;">
                    <!-- Education section -->
    
                    <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #B0F0EE; border-radius: 20px;
                padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    margin-bottom: 15px;
                ">
                        <h1 class="text1">Education</h1>
                        <h1 class="text1">Cairo university</h1>
    
                        <h1 class="text2">Bachelor's degree in computer science</h1>
                        <b class="text2">2014 - 2018 ·4 years Cairo, Egypt</b>
                        <h1 class="gradeText">Grade : <b style="font-weight: 400; ">Excellent</b></h1>
                    </div>
    
                    <!-- Experience section -->
                    <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #F8E5B0; border-radius: 20px;
                padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    
                ">
                        <h1 class="textExp">Experience</h1>
                        <h1 style="font-size: 25px;" class="textExp">Senior ui/ux designer</h1>
                        <h1 class="text2">o-projects</h1>
                        <b class="text4">Sep 2023 - Present · 2 mos Cairo, Egypt</b>
                        <h1 class="text3">Description</h1>
                        <b class="text4">
                            •Analyse and undrstand user requirements, behaviours, and motivations through research,
                            feedback, usability testing, another methodologies to craft optimal UX solutions.</b>
                        <div style="height: 10px;"></div>
                        <h1 style="font-size: 25px;" class="textExp">Senior ui/ux designer</h1>
                        <h1 class="text2">o-projects</h1>
                        <b class="text4">Sep 2023 - Present · 2 mos Cairo, Egypt</b>
                        <h1 class="text3">Description</h1>
                        <b class="text4">
                            •Analyse and undrstand user requirements, behaviours, and motivations through research,
                            feedback, usability testing, another methodologies to craft optimal UX solutions.</b>
                        <div style="height: 10px;"></div>
                    </div>
    
    
    
                    <!-- end right section -->
                </div>
    
                <!-- rigth section -->
                <div style="width: 50%;flex-direction: column; ">
    
                    <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #F2F2F2; border-radius: 20px;
                padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
                ">
                        <h1 class="sectionType">Achievements</h1>
                        <h1 class="text2">- Employee of the month at O-Projects on 20/11/2023</h1>
                        <h1 class="text2">- Getting the first place in a sport on 20</h1>
                    </div>
                    <div style="flex: 1; 
                    padding: 10px 0px;
                     margin: 0px; background-color: #E8EFFC; border-radius: 20px;
                padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    margin-top: 20px;
                ">
                        <h1 class="textExp">Training Courses</h1>
                        <h1 class="text3" style="font-weight: normal;">HR Diploma</h1>
                        <h1 class="text3" style="font-size: 20px; font-weight: normal;">at Egycham</h1>
                        <h1 class="text3" style="font-size: 20px; font-weight: normal;">Bachelor's degree in computer
                            science</h1>
                        <b class="text4">2014 - 2018 ·4 years Cairo, Egypt</b>
                        <div style="height: 7px;"></div>
                        <h1 class="textExp">Training Courses</h1>
                        <h1 class="text3" style="font-weight: normal;">HR Diploma</h1>
                        <h1 class="text3" style="font-size: 20px; font-weight: normal;">at Egycham</h1>
                        <h1 class="text3" style="font-size: 20px; font-weight: normal;">Bachelor's degree in computer
                            science</h1>
                        <b class="text4">2014 - 2018 ·4 years Cairo, Egypt</b>
                        <div style="height: 7px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #B0F0EE; border-radius: 20px;
                    padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        margin-top: 20px;
    
                    ">
                        <h1 class="text1" style="
                        line-height: normal;
                        margin-top: 0px;
                        margin-bottom: 7px;
                        ">Skills and tools</h1>
                        <div style="display: flex; flex-direction: row;justify-content: space-between;flex-wrap: wrap;">
                            <div style="display: flex;width: 50%;flex-direction: column;">
                                <h1 class="text3" style="
                            font-size: 20px;
                            font-weight: 400;
                            ">Computer Skills</h1>
                                <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767);
                            font-size: 15px;
                            margin: 5px 0px 5px 10px;
                            ">. Word processing software</h1>
                                <h1 class="textSkill">. Word processing software</h1>
                            </div>
    
                            <div style="display: flex;width: 50%;flex-direction: column;">
                                <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                                font-family: Noto Sans;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 20px;
                                margin: 10px 0px;
                                ">Language Skills</h1>
                                <h1 class="textSkill">. English</h1>
                                <h1 class="textSkill">. Arabic</h1>
                            </div>
    
                            <div style="display: flex;width: 50%;flex-direction: column;">
                                <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                                    font-family: Noto Sans;
                                    font-size: 20px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: 20px;
                                    margin: 7px 0px;
                                    ">Personal Skills</h1>
                                <h1 class="textSkill">. Collaboration</h1>
                                <h1 class="textSkill">. Conflict resolution</h1>
                                <h1 class="textSkill">. Problem-solving
                                </h1>
                            </div>
    
                            <div style="display: flex;width: 50%;flex-direction: column;">
                                <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                                        font-family: Noto Sans;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 20px;
                                        margin: 10px 0px;
                                        ">Technical Skills</h1>
                                <h1 class="textSkill">. Web</h1>
    
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </div>
            <div style="display:flex;padding: 20px 60px; margin: 0px;width: 92%;margin-left: auto; margin-right: auto;">
                <div style="display: flex;background-color: #F8E5B0;
                width: 100%;
            border-radius: 20px;
            padding: 25px 70px;
            margin: 0px;
            ">
                    <div style="display: flex;flex: 1; flex-direction: column; padding-left: 40px;">
                        <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                        font-family: Noto Sans;
                        font-size: 25px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin: 10px 0px;
                        ">Additional data</h1>
                        <div style="display: flex; width: 100%;flex-direction: row;justify-content: flex-start;">
                            <div style="display: flex; flex-direction: column; flex: 1;">
    
                                <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin: 5px 0px;
    ">Date of birth</h1>
                                <h1 class="textSkill">. 09/06/1996</h1>
    
                                <div style="height: 10px;"></div>
                                <h1 class="text4" style="
                            font-size: 16px;
                            margin: 5px 0px;
                            ">Military status:</h1>
                                <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767); 
                                                margin: 5px 0px 5px 10px;
                                                ">. Exempted</h1>
                            </div>
    
                            <div style="display: flex; flex-direction: column; flex: 1;">
    
                                <h1 class="text4" style="font-size: 16px; margin: 5px 0px;">Marital status</h1>
                                <h1 style="color: var(--foundation-grey-grey-300, #676767);
                        font-family: Noto Sans;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 16px;
                        margin: 5px 0px 5px 10px;
                        ">. Single</h1>
    
                                <div style="height: 10px;"></div>
                                <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                            font-family: Noto Sans;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 20px;
                            margin: 5px 0px;
                            ">Car license</h1>
                                <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767);
                                                margin: 5px 0px 5px 10px;
                                                ">. 01156484</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`
};
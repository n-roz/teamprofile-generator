const generateHTML = (objEmployees) => {
    
    let manager = [];
    for(let a=0;a<objEmployees.length;a++){
        if(objEmployees[a].getRole() === 'Manager'){
            manager = objEmployees[a];
            break;
        }
    }

    let engineerCards = '';
    for(let a=0;a<objEmployees.length;a++){
        if(objEmployees[a].getRole() === 'Engineer'){
            const engineer = objEmployees[a];
            const role = objEmployees[a].getRole();
            engineerCards += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${engineer.name}</h3>
                        <h4>${role}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }

    let internCards = '';
    for(let a=0;a<objEmployees.length;a++){
        if(objEmployees[a].getRole() === 'Intern'){
            const intern = objEmployees[a];
            const role = objEmployees[a].getRole();
            internCards += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${intern.name}</h3>
                        <h4>${role}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <main>
            <div class="banner">My Team</div>
            
            <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
                <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${manager.name}</h3>
                        <h4>Manager</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                </div>
                ${engineerCards}
                ${internCards}
                
            </div>
        </main>
        
    </body>
    </html>
    `

}

module.exports = generateHTML;
document.addEventListener("DOMContentLoaded", function() {

    const $introTitle = document.querySelector('.title-content').children,
        $robotTitle = [...document.querySelector('.robot-title').children, document.querySelector('.robot-special')]
        _baseArguments = {
            delay: 0,
            duration: 1000,
            distance: '100px',
            reset: true,
        },
        $allWorldTitle = document.querySelector('.robot-hand-title').children,
        $applicationStartTitle = document.querySelector('.apps_applications').children,
        $aboutChatUsersTitle = document.querySelector('.apps_users').children,
        $activeAgents = document.querySelector('.promo-logo-table').children,
        $downloadInfo = document.querySelector('.promo-available').children,
        $footerElements = document.querySelector('.footer-cards').children,

    ScrollReveal().reveal($introTitle, {
        ..._baseArguments,
        origin: 'right',
        interval: 1000,
        distance: '200px',
        reset: false
    })

    ScrollReveal().reveal($robotTitle, {
        ..._baseArguments,
        origin: 'bottom',
        interval: 1000,
    })

    ScrollReveal().reveal($allWorldTitle, {
        ..._baseArguments,
        origin: 'right',
        interval: 500,
    })

    ScrollReveal().reveal($applicationStartTitle, {
        ..._baseArguments,
        origin: 'left',
        interval: 300,
    })

    ScrollReveal().reveal($aboutChatUsersTitle, {
        ..._baseArguments,
        origin: 'right',
    })

    ScrollReveal().reveal($activeAgents, {
        ..._baseArguments,
        origin: 'left',
    })

    ScrollReveal().reveal($downloadInfo, {
        ..._baseArguments,
        origin: 'bottom',
    })

    ScrollReveal().reveal($footerElements, {
        ..._baseArguments,
        origin: 'bottom',
    })



    
});
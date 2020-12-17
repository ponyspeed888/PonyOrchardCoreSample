This repository is created to let asp.net core developer to quickly try
out two common OrchardCore usage scenerios :

1.  Your main content is asp.net core and you want o add OrchardCore cms
2.  Your main content is OrchardCore CMS, and you want to add some
    asp.net

At the time of this writing, there are very few samples for you to try
these two use cases, so I created this sample.

Admin user : admin

password : Password-1

PonyOrchardCoreSample : is the custom asp.net code

PonyOrchardCoreSample.CMSDecoupled : For case 1

PonyOrchardCoreSample.CMS : For case 2

Note : The standard way for Decoupled cms is to create the database, and
you have to render and format the content. But for the demo purpose, I
copied the app_data from PonyOrchardCoreSample.CMS, and it include all
the formating.

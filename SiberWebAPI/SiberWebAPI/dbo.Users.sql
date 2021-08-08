CREATE TABLE [dbo].[Users] (
    [Id]             INT            IDENTITY (1, 1) NOT NULL,
    [Name]           NVARCHAR (50)  NULL,
    [Surname]        NVARCHAR (50)  NULL,
    [Gender]         NVARCHAR (5)   NULL,
    [Age]            INT            NULL,
    [City]           NVARCHAR (50)  NULL,
    [Score]          INT            NULL,
    [EducationLevel] NVARCHAR (100) NULL,
    [QuizDateTime]   DATETIME       DEFAULT (getdate()) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


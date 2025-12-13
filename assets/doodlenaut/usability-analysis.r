library(ggplot2)
# Data for Design A
design_a <- data.frame(
 Metric = c("Satisfied with how easy it is to use", "Simple to use", "Effectively complete work", 
            "Complete work quickly", "Efficiently complete work", "Comfortable using", 
            "Easy to learn to use", "Became productive quickly", "Gives error messages",
            "The information is clear", "Easy to find the information", "Information provided is easy to understand",
            "Information is effective", "Organization of information is clear", "Interface is pleasant",
            "Like using the interface", "Has all functions and capabilities", "Overall satisfied"),
 Mean = c(6.89, 6.67, 6.56, 6.44, 6.33, 6.44, 6.56, 6.44, 2.67, 4.78, 6, 6.22, 6.22, 6.44, 6.56, 6.78, 6.67, 6.56),
 SD = c(0.33, 0.71, 1.01, 1.01, 1.12, 1.01, 0.53, 1.33, 2.18, 2.11, 1.41, 0.97, 0.97, 1.01, 0.53, 0.44, 0.5, 0.53)
)

# Data for Design B
design_b <- data.frame(
 Metric = c("Satisfied with how easy it is to use", "Simple to use", "Effectively complete work", 
            "Complete work quickly", "Efficiently complete work", "Comfortable using", 
            "Easy to learn to use", "Became productive quickly", "Gives error messages",
            "The information is clear", "Easy to find the information", "Information provided is easy to understand",
            "Information is effective", "Organization of information is clear", "Interface is pleasant",
            "Like using the interface", "Has all functions and capabilities", "Overall satisfied"),
 Mean = c(6.67, 6.78, 6.33, 6.33, 6.56, 6.56, 6.78, 6.67, 5.56, 2.33, 3.67, 6.22, 6.44, 6.33, 6.89, 6.56, 6, 6.33),
 SD = c(1, 0.67, 1.32, 1.32, 0.88, 0.88, 0.67, 0.71, 1.94, 1.58, 2.24, 1.09, 0.73, 1.12, 0.33, 0.73, 1.22, 0.71)
)
# Label each design
design_a$Design <- 'A'
design_b$Design <- 'B'

# Combine the data into one data frame
combined_data <- rbind(design_a, design_b)
# Generate a bar chart
ggplot(combined_data, aes(x = Metric, y = Mean, fill = Design)) +
 geom_bar(stat = "identity", position = position_dodge()) +
 theme(axis.text.x = element_text(angle = 45, hjust = 1)) +
 labs(title = "Comparison of Usability Metrics by Design", x = "Metric", y = "Mean Score")
p <- ggplot(combined_data, aes(x = Metric, y = Mean, fill = Design)) +
 geom_bar(stat = "identity", position = position_dodge()) +
 theme(axis.text.x = element_text(angle = 45, hjust = 1, vjust = 1, size = 8),
       plot.margin = unit(c(1, 1, 3, 1), "cm"),  # Increased bottom margin
       plot.title = element_text(hjust = 0.5)) +  # Center the title
 labs(title = "Comparison of Usability Metrics by Design", x = "Metric", y = "Mean Score")
print(p)
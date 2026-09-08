import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ project }) {
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={project.image}
        alt={project.title}
      />

      <CardContent sx={{ padding: '24px' }}>
        <p className="text-sm font-medium text-gray-500">{project.category}</p>

        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{
            marginTop: '8px',
            fontWeight: 600,
            color: '#111827',
          }}
        >
          {project.title}
        </Typography>
      </CardContent>

      <CardActions sx={{ padding: '0 24px 24px' }}>
        <Button
          size="small"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            color: '#111827',
          }}
        >
          View Live
        </Button>
      </CardActions>
    </Card>
  );
}

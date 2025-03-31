import request from 'supertest';
import app from '../../backend/src/app';
import Task from '../../backend/src/domain/models/tasks';

jest.mock('../../src/domain/models/tasks'); // Mock do modelo Task

describe('TaskController', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa os mocks antes de cada teste
  });

  it('Deve criar uma nova tarefa', async () => {
    const mockTask = { id: 1, title: 'Test Task', description: 'Test Description', dueDate: '2023-10-01' };
    (Task.create as jest.Mock).mockResolvedValue(mockTask);

    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'Test Description', dueDate: '2023-10-01' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockTask);
    expect(Task.create).toHaveBeenCalledWith({
      title: 'Test Task',
      description: 'Test Description',
      dueDate: '2023-10-01',
    });
  });

  it('Deve retornar todas as tarefas', async () => {
    const mockTasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2023-10-01' },
      { id: 2, title: 'Task 2', description: 'Description 2', dueDate: '2023-10-02' },
    ];
    (Task.findAll as jest.Mock).mockResolvedValue(mockTasks);

    const response = await request(app).get('/api/tasks');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTasks);
    expect(Task.findAll).toHaveBeenCalled();
  });

  it('Deve retornar erro 404 se a tarefa não for encontrada', async () => {
    (Task.findByPk as jest.Mock).mockResolvedValue(null);

    const response = await request(app).get('/api/tasks/999');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Tarefa não encontrada' });
    expect(Task.findByPk).toHaveBeenCalledWith('999');
  });
});